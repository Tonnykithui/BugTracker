import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bug, bugDto } from '../models/bug.entity';
import { TicketMembers } from '../models/ticketMembers.entity';
import { CommentService } from './comment.service';

@Injectable()
export class BugService {
  constructor(
    @InjectModel(Bug.name) private bugModel: Model<Bug>,
    @InjectModel(TicketMembers.name) private ticketMembersModel: Model<TicketMembers>,
    private commentService: CommentService
  ) { }

  async create(createBugDto: bugDto) {
    const tickets = await this.bugModel.find({ projectId: createBugDto.projectId });
    tickets.forEach(ticket => {
      if(ticket.title.toLowerCase().trim() === createBugDto.title.toLowerCase().trim()){
        throw new HttpException('Ticket with the same Title exists', HttpStatus.BAD_REQUEST);
      }
    })

    return await this.bugModel.create(createBugDto);
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
    if (ticket) {
      return {
        ticket,
        comments
      }
    } else
      throw new HttpException('Ticket with passed ID does not exists', HttpStatus.BAD_REQUEST);
  }

  async update(id, updateBugDto: bugDto) {
    if(await this.bugModel.findById(id)){
      return await this.bugModel.findByIdAndUpdate(id, updateBugDto);
    } else {
      throw new HttpException('No ticket with given ID exists', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id, userId) {
    const ticket = await this.bugModel.findById(id);
    if(ticket.ticketOwner !== userId){
      throw new HttpException('User not allowed to delete this ticket', HttpStatus.BAD_REQUEST);
    } else {
      return await this.bugModel.findByIdAndDelete(id);
    }
  }

  async findAllTicketsForProject(projectId) {
    return await this.bugModel.find({ projectId: projectId })
      .populate('ticketOwner', { firstname: 1, lastname: 1 });
  }

  async deleteAllTicketsForProject(projectId){
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
}
