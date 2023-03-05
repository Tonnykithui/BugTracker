import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bug, bugDto } from '../models/bug.entity';
import { CommentService } from './comment.service';

@Injectable()
export class BugService {
  constructor(
    @InjectModel(Bug.name) private bugModel: Model<Bug>,
    private commentService: CommentService
  ) { }

  async create(createBugDto: bugDto) {
    return await 'This action adds a new bug';
  }

  async findAll() {
    return await `This action returns all bug`;
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

  async update(id: number, updateBugDto: bugDto) {
    return await `This action updates a #${id} bug`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} bug`;
  }

  async findAllTicketsForProject(projectId) {
    return await this.bugModel.find({ projectId: projectId })
      .populate('ticketOwner', { firstname: 1, lastname: 1 });
  }

  async deleteAllTicketsForProject(projectId){
    const allTicketsForProject = await this.findAllTicketsForProject(projectId);
    try {
      allTicketsForProject.forEach(async ticket => {
        await this.commentService.deleteCommentForTicket(ticket.id);
      })
    } catch (error) {
      throw new HttpException('Error on deleting comments', HttpStatus.BAD_REQUEST);
    }
    return await this.bugModel.deleteMany({ projectId: projectId });
  }
}
