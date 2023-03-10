import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/models/user.entity';
import { UserService } from 'src/user/services/user.service';
import { Bug, bugDto } from '../models/bug.entity';
import { ProjectMembers } from '../models/projectMembers.entity';
import { TicketMembers } from '../models/ticketMembers.entity';
import { CommentService } from './comment.service';
import { ProjectService } from './project.service';

@Injectable()
export class BugService {
  constructor(
    @InjectModel(Bug.name) private bugModel: Model<Bug>,
    @InjectModel(TicketMembers.name) private ticketMembersModel: Model<TicketMembers>,
    @InjectModel(ProjectMembers.name) private projectMembersModel: Model<ProjectMembers>,
    private commentService: CommentService,
  ) { }

  async create(createBugDto: bugDto, userId) {
    createBugDto.ticketOwner = userId.userId;
    createBugDto.lastUpdatedBy = userId.userId;
    const tickets = await this.bugModel.find({ projectId: createBugDto.projectId });
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
    const tickets = await this.ticketMembersModel.find({ memberId: userId });
    const userTickets: Bug[] = [];
    tickets.forEach(async item => {
      userTickets.push(await this.bugModel.findById(item.ticketId));
    })
    return userTickets;
  }

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

  async update(id, updateBugDto: bugDto) {
    if (await this.bugModel.findById(id)) {
      const allTickets = await this.bugModel.find({ projectId: updateBugDto.projectId });
      for (let i = 0; i < allTickets.length; i++) {
        if (allTickets[i].title === updateBugDto.title && allTickets[i]._id != id) {
          throw new HttpException('Ticket with given title already exists', HttpStatus.BAD_REQUEST);
        }
      }

      const ticketUpdate = await this.bugModel.findByIdAndUpdate(id, updateBugDto);

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
    if (ticket.ticketOwner !== userId) {
      throw new HttpException('User not allowed to delete this ticket', HttpStatus.BAD_REQUEST);
    } else {
      return await this.bugModel.findByIdAndDelete(id);
    }
  }

  async findAllTicketsForProject(projectId) {
    return await this.bugModel.find({ projectId: projectId })
      .populate('ticketOwner', { firstname: 1, lastname: 1 });
  }

  async deleteAllTicketsForProject(projectId) {
    const allTicketsForProject = await this.findAllTicketsForProject(projectId);
    try {
      allTicketsForProject.forEach(async ticket => {
        await this.commentService.deleteCommentsForTicket(ticket.id);
      })
    } catch (error) {
      throw new HttpException('Error on deleting comments', HttpStatus.BAD_REQUEST);
    }
    return await this.bugModel.deleteMany({ projectId: projectId });
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
}

// await this.ticketMembersModel.deleteMany(
//   {
//     $and:[
//       { ticketId: id },
//       { projectId: updateBugDto.projectId },
//       { memberId: { $ne: updateBugDto.ticketOwner } }
//     ]
//   });
