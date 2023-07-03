import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from 'src/user/models/user.entity';
import { UserService } from 'src/user/services/user.service';
import { Bug, bugDto } from '../models/bug.entity';
import { ProjectMembers } from '../models/projectMembers.entity';
import { TicketMembers } from '../models/ticketMembers.entity';
import { CommentService } from './comment.service';
import { ProjectService } from './project.service';
import { Types } from 'mongoose';
import { Project } from '../models/project.entity';


@Injectable()
export class BugService {
  constructor(
    @InjectModel(Bug.name) private bugModel: Model<Bug>,
    @InjectModel(TicketMembers.name) private ticketMembersModel: Model<TicketMembers>,
    @InjectModel(ProjectMembers.name) private projectMembersModel: Model<ProjectMembers>,
    @InjectModel(Project.name) private projectModel: Model<Project>,
    private commentService: CommentService
  ) { }

  async create(createBugDto: bugDto, userId) {
    createBugDto.ticketOwner = userId.userId;
    createBugDto.lastUpdatedBy = userId.userId;
    const tickets = await this.bugModel.find({ projectId: createBugDto.projectId });
    console.log("All tickets", tickets);
    tickets.forEach(ticket => {
      if (ticket.title.toLowerCase().trim() === createBugDto.title.toLowerCase().trim()) {
        throw new HttpException('Ticket with the same Title exists', HttpStatus.BAD_REQUEST);
      }
    })

    const ticket = await this.bugModel.create(createBugDto);
    await this.ticketMembersModel.create({ memberId: userId.userId, projectId: createBugDto.projectId, ticketId: ticket._id });

    if (createBugDto.assignedUsers?.length > 0) {
      createBugDto.assignedUsers?.forEach(async (user) => {
        if (await (await this.projectMembersModel.find({ memberId: user, projectId: createBugDto.projectId })).length > 0) {
          await this.ticketMembersModel.create({ memberId: user, projectId: createBugDto.projectId, ticketId: ticket._id });
        } else {
          throw new HttpException('User assigned to ticket is not in the base Project', HttpStatus.BAD_REQUEST);
        }
      });
    }

    return ticket;
  }

  async findAllTicketsAssignedToUser(userId) {
    let newId = new Types.ObjectId(userId.userId);
    const tickets = await this.ticketMembersModel.find({ memberId: newId });
    let userTickets: Bug[] = await Promise.all(tickets.map(async (item) => {
      let ticket = await this.bugModel.findById(item.ticketId);
      return ticket;
    }));
    return userTickets;
  }
  // async findAllTicketsAssignedToUser(userId) {
  //   let newId = new Types.ObjectId(userId.userId);
  //   const tickets = await this.ticketMembersModel.find({ memberId: newId });
  //   console.log('USER TICKETS',tickets);
  //   let userTickets: Bug[] = [];
  //   tickets.forEach(async item => {
  //     let ticket = await this.bugModel.findById(item.ticketId);
  //     userTickets.push(ticket);
  //   })
  //   return userTickets;
  // }

  async findOne(ticketId) {
    const ticket = await this.bugModel.findById(ticketId);
    const comments = await this.commentService.findAllCommentsForTicket(ticketId);
    const assignedUsers = await this.ticketMembersModel.find({ ticketId: ticketId })
      .populate('memberId', { firstname: 1, lastname: 1 });

    if (ticket) {
      return {
        ticket,
        comments,
        assignedUsers
      }
    } else
      throw new HttpException('Ticket with passed ID does not exists', HttpStatus.BAD_REQUEST);
  }

  async update(id, updateBugDto) {
    console.log(id);
    if (await this.bugModel.findById(id)) {
      // const allTickets = await this.bugModel.find({ projectId: updateBugDto.projectId });
      // for (let i = 0; i < allTickets.length; i++) {
      //   if (allTickets[i].title === updateBugDto.title && allTickets[i]._id != id) {
      //     throw new HttpException('Ticket with given title already exists', HttpStatus.BAD_REQUEST);
      //   }
      // }

      let ticketId = { _id: id }
      delete updateBugDto._id;
      // const update = { $unset: { _id: id }, $set: { ...updateBugDto } };
      // console.log(update);
      let ticketUpdate = await this.bugModel.findOneAndUpdate(ticketId, updateBugDto);
      console.log('HERE')
      // const ticketUpdate = await this.bugModel.findByIdAndUpdate(id, updateBugDto);

      console.log(ticketUpdate);
      if (updateBugDto.assignedUsers?.length > 0) {
        for (let i = 0; i < updateBugDto.assignedUsers.length; i++) {
          const ticketMemberExists = await this.ticketMembersModel.find({ memberId: updateBugDto.assignedUsers[i], projectId: updateBugDto.projectId, ticketId: id })
          if (!(ticketMemberExists.length > 0)) {
            await this.ticketMembersModel.create({ memberId: updateBugDto.assignedUsers[i], projectId: updateBugDto.projectId, ticketId: id });
          }
        }
      }

      return ticketUpdate;

    } else {
      throw new HttpException('No ticket with given ID exists', HttpStatus.BAD_REQUEST);
    }

  }

  async remove(id, userId) {
    const ticket = await this.bugModel.findById(id);

    console.log('COMPARISON', ticket.ticketOwner.toString() === userId.userId);
    if (ticket) {
      if (ticket.ticketOwner.toString() !== userId.userId) {
        throw new HttpException('User not allowed to delete this ticket', HttpStatus.BAD_REQUEST);
      } else {
        const ticketMembers = await this.ticketMembersModel.deleteMany({
          ticketId: id
        });
        return await this.bugModel.findByIdAndDelete(id);
      }
    } else {
      throw new HttpException('Ticket does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async findAllTicketsForProject(projectId) {
    return await this.bugModel.find({ projectId: projectId })
      .populate('ticketOwner', { firstname: 1, lastname: 1 });
  }

  async countCompletedBugsForProject(projectId) {
    return await this.bugModel.count({
      projectId: projectId,
      status: 'CLOSED'
    });
  }

  async deleteAllTicketsForProject(projectId) {
    //check there is a project wih this Id
    let newProjectId = new Types.ObjectId(projectId);
    if (await this.projectModel.findOne(newProjectId)) {
      const allTicketsForProject = await this.findAllTicketsForProject(newProjectId);
      try {
        allTicketsForProject.forEach(async ticket => {
          await this.commentService.deleteCommentsForTicket(ticket.id);
        })
      } catch (error) {
        throw new HttpException('Error on deleting comments', HttpStatus.BAD_REQUEST);
      }
    } else {
      throw new HttpException('No project with given id exists', HttpStatus.BAD_REQUEST);
    }
    return await this.bugModel.deleteMany({ projectId: newProjectId });
  }

  async findTicketById(ticketId) {
    return await this.bugModel.findById(ticketId);
  }

  async removeUserFromAssignedTicket(ticketId, userId) {
    if (await this.findTicketById(ticketId)) {
      return await this.ticketMembersModel.deleteMany({ ticketId: ticketId, memberId: userId });
    } else {
      throw new HttpException('The Ticket to get rid off of user does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async findTaskForAUser(userId) {
    let allRelatedBugsToUser = await this.ticketMembersModel.find({
      memberId: userId.userId
    });

    let allUndoneBugs = [];

    allRelatedBugsToUser.forEach(async (bug) => {
      allUndoneBugs.push(await this.bugModel.find({ _id: bug.ticketId, status: 'OPEN' }));
    });

    return allUndoneBugs.slice(0, 9);
  }

  async findUserBugRelation(userId) {
    let allTicketsAssigned = await this.ticketMembersModel.find({
      memberId: userId
    });

    let ticketDoneCount = [];
    allTicketsAssigned.forEach(async (bug) => {
      ticketDoneCount.push(await this.bugModel.find({
        _id: bug.ticketId,
        status: 'CLOSED'
      }));
    });

    let openTickets = allTicketsAssigned.length - ticketDoneCount.length;

    return {
      allTicketsAssigned: allTicketsAssigned.length,
      ticketDoneCount: ticketDoneCount.length,
      openTickets
    }
  }

  async findUsersOpenClosedNInprogressTickets(userId) {
    let ticketsAssigned = await this.ticketMembersModel.find({ memberId: userId });

    let allTicket: bugDto[] = [];
    ticketsAssigned.forEach(async (ticket) => {
      let ticketForUser: bugDto = await this.bugModel.findById(ticket.ticketId);
      if (ticketForUser) {
        allTicket.push(ticketForUser);
      }
    });

    let tickets = await this.bugModel.find({});
    console.log('TICKETS ASSIGNED', allTicket);
    return {
      allOpen: ticketsAssigned.length > 0 ? allTicket.filter((ticket) => ticket.status !== 'OPEN') : [],
      allInProgress: ticketsAssigned.length > 0 ? allTicket.filter((ticket) => ticket.status !== 'INPROGRESS') : [],
      allClosed: ticketsAssigned.length > 0 ? allTicket.filter((ticket) => ticket.status !== 'CLOSED') : []
    }
  }
}

// await this.ticketMembersModel.deleteMany(
//   {
//     $and:[
//       { ticketId: id },
//       { projectId: updateBugDto.projectId },
//       { memberId: { $ne: updateBugDto.ticketOwner } }
//     ]
//   });
