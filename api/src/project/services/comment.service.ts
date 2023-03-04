import { Injectable } from '@nestjs/common';
import { commentDto } from '../models/comment.entity';

@Injectable()
export class CommentService {
  async create(createCommentDto: commentDto) {
    return await 'This action adds a new comment';
  }

  async findAll() {
    return await `This action returns all comment`;
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
}
