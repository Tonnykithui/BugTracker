import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { Comment, commentDto } from '../models/comment.entity';

@Injectable()
export class CommentService {

  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>
  ) { }

  async create(createCommentDto) {
    const date = new Date();
    createCommentDto.submitTime = date;
    return await this.commentModel.create(
      {
        name: createCommentDto.name,
        Owner: createCommentDto.Owner,
        submitTime: createCommentDto.submitTime,
        ticketId: createCommentDto.ticketId
      }
    );
  }

  async findAllCommentsForTicket(ticketId) {
    return await this.commentModel.find({ ticketId: ticketId })
      .populate('Owner', { firstname: 1, lastname: 1 });
  }

  async findOne(id) {
    return await this.commentModel.findById(id);
  }

  async update(id, updateCommentDto: commentDto) {
    if(await this.commentModel.findById(id)){
      return await this.commentModel.findByIdAndUpdate(id, updateCommentDto);
    } else {
      throw new HttpException('Comment with provided ID does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(bugId, commentId, userId) {
    const commId = new Types.ObjectId(commentId);
    const comment = await this.commentModel.find({ _id: commId, ticketId: bugId });
    console.log('WE IN SERVICE', comment);
    if(comment[0].Owner.toString() !== userId.userId){
      throw new HttpException('User not allowed to delete comment', HttpStatus.BAD_REQUEST);
    } else {

      return await this.commentModel.findByIdAndDelete(commentId);
    }
  }

  async deleteCommentsForTicket(ticketId) {
    if ((await this.commentModel.find({ ticketId: ticketId })).length > 0) {
      return await this.commentModel.deleteMany({ ticketId: ticketId });
    } else {
      return 'No comments found for the ticket'
    }
  }
}
