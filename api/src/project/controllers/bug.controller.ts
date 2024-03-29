import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectId, Types } from 'mongoose';
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

  @Get('pendingTickets')
  async pendingTickets(@LoggedInUser() userId: ObjectId){
    return new ResponseMessage('Successfully fetched all tickets belonging to a user and not completed', await this.bugService.findTaskForAUser(userId));
  }

  @Get('bugType/all')
  async findReportByAssignedType(@LoggedInUser() userId: ObjectId){
    return new ResponseMessage('Successfully fetched all bugs by their type', await this.bugService.findTypeOfReport(userId));
  }

  @Get('bugStatus/all')
  async findBugByStatusAll(@LoggedInUser() userId: ObjectId){
    return new ResponseMessage('Successfully fetched all bugs by their status', await this.bugService.findUsersOpenClosedNInprogressTickets(userId));
  }

  @Get('bugPriority/all')
  async findBugByTheirPriority(@LoggedInUser() userId:ObjectId){
    return new ResponseMessage('Successfully fetched all bugs by their priority', await this.bugService.findUsersTicketsPriority(userId));
  }
  
  @Get('otherUsers/:userId')
  async findAllTicketsAssignedToOtherUser(@Param() userId) {
    return new ResponseMessage('Successfully fetched all tickets assigned to logged in user', await this.bugService.findAllTicketsAssignedToUser(userId));
  }

  @Get('user/:userId')
  async findUserBugSummary(@Param('userId') userId: ObjectId){
    return new ResponseMessage('Successfully fetched bug summary reports for a user', await this.bugService.findUserBugRelation(userId));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ResponseMessage('Successfully fetched a single tickets details', await this.bugService.findOne(id));
  }

  @Post(':id')
  async update(@Param('id') id: string, @Body() updateBugDto: bugDto, @LoggedInUser() userId: ObjectId) {
    return new ResponseMessage('Successfully updated a ticket', await this.bugService.update(id, updateBugDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @LoggedInUser() userId: ObjectId) {
    return new ResponseMessage('Successfully deleted a ticket', await this.bugService.remove(id, userId));
  }

  // COMMENTS CUD
  @Post('/:bugId/comments')
  async createComment(@Param('bugId') bugId: ObjectId, @Body() createCommentDto: commentDto, @LoggedInUser() userId) {
    createCommentDto.Owner = userId.userId;
    createCommentDto.ticketId = bugId;
    return new ResponseMessage("Successfully commented on a ticket", await this.commentService.create(createCommentDto));
  }

  @Patch('/:bugId/comments/:commentId')
  async updateComment(@Param('id') id: string, @Body() updateCommentDto: commentDto) {
    return new ResponseMessage("", await this.commentService.update(id, updateCommentDto));
  }

  @Delete('/:bugId/comments/:commentId')
  async removeComment(@Param('bugId') bugId: ObjectId, @Param('commentId') commentId: ObjectId , @LoggedInUser() userId: ObjectId) {
    console.log('THIS IS JUST A CONTROLLER')
    return new ResponseMessage("Successfully deleted a comment", await this.commentService.remove(bugId, commentId, userId));
  }

  @Delete('/:userId/user')
  async deleteTicketsAssociatedToUser(@Param('userId') userId: ObjectId, @LoggedInUser() loggedInUser: ObjectId){
    return new ResponseMessage('Successfully deleted all tickets associated to a user', await this.bugService.removeUserTicketAssociation(userId))
  }
}
