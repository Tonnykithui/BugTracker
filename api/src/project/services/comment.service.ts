import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment, commentDto } from '../models/comment.entity';

@Injectable()
export class CommentService {

  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>
  ) { }

  async create(createCommentDto: commentDto) {
    return await 'This action adds a new comment';
  }

  async findAllCommentsForTicket(ticketId) {
    return await this.commentModel.find({ ticketId: ticketId })
      .populate('Owner', { firstname: 1, lastname: 1 });
  }

  async findOne(id: number) {
    return await `This action returns a #${id} comment`;
  }

  async update(id: number, updateCommentDto: commentDto) {
    return await `This action updates a #${id} comment`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} comment`;
  }

  async deleteCommentForTicket(ticketId){
    if(await (await this.commentModel.find({ ticketId: ticketId })).length > 0){
      return await this.commentModel.deleteMany({ ticketId: ticketId });
    } else {
      return 'No comments found for the ticket'
    }
  }
}
