import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseMessage } from 'src/customs/Response';
import { commentDto } from '../models/comment.entity';
import { CommentService } from '../services/comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async create(@Body() createCommentDto: commentDto) {
    return new ResponseMessage("", await this.commentService.create(createCommentDto));
  }

  // @Get()
  // async findAll() {
  //   return new ResponseMessage("", await this.commentService.findAllCommentsForTicket());
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ResponseMessage("", await this.commentService.findOne(+id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCommentDto: commentDto) {
    return new ResponseMessage("", await this.commentService.update(+id, updateCommentDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ResponseMessage("", await this.commentService.remove(+id));
  }
}
