import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { ResponseMessage } from 'src/customs/Response';
import { LoggedInUser } from 'src/user/auth/user.decorator';
import { bugDto } from '../models/bug.entity';
import { commentDto } from '../models/comment.entity';
import { BugService } from '../services/bug.service';
import { CommentService } from '../services/comment.service';

@Controller('bug')
@ApiTags('bugs')
export class BugController {
  constructor(
    private readonly bugService: BugService,
    private commentService: CommentService
    ) {}

  @Post()
  async create(@Body() createBugDto: bugDto, @LoggedInUser() userId: ObjectId) {
    return new ResponseMessage('Successfully created a Ticket', await this.bugService.create(createBugDto, userId));
  }

  @Get()
  async findAllTicketsAssignedToUser(@LoggedInUser() userId: ObjectId) {
    return new ResponseMessage('Successfully fetched all tickets assigned to logged in user', await this.bugService.findAllTicketsAssignedToUser(userId));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ResponseMessage('Successfully fetched a single tickets details', await this.bugService.findOne(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBugDto: bugDto, @LoggedInUser() userId: ObjectId) {
    // updateBugDto.lastUpdatedBy = userId;
    return new ResponseMessage('Successfully updated a ticket', await this.bugService.update(id, updateBugDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @LoggedInUser() userId: ObjectId) {
    return new ResponseMessage('Successfully deleted a ticket', await this.bugService.remove(id, userId));
  }

  // COMMENTS CUD
  @Post('/:bugId/comments')
  async createComment(@Param('bugId') bugId: ObjectId, @Body() createCommentDto: commentDto, @LoggedInUser() userId) {
    createCommentDto.Owner = userId;
    createCommentDto.ticketId = bugId
    return new ResponseMessage("Successfully commented on a ticket", await this.commentService.create(createCommentDto));
  }

  @Patch('/:bugId/comments/:commentId')
  async updateComment(@Param('id') id: string, @Body() updateCommentDto: commentDto) {
    return new ResponseMessage("", await this.commentService.update(id, updateCommentDto));
  }

  @Delete('/:bugId/comments/:commentId')
  async removeComment(@Param('bugId') bugId: ObjectId, @Param('commentId') commentId: ObjectId , @LoggedInUser() userId) {
    return new ResponseMessage("Successfully deleted a comment", await this.commentService.remove(bugId, commentId, userId));
  }
}
