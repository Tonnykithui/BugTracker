import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ResponseMessage } from 'src/customs/Response';
import { projectDto } from '../models/project.entity';
import { ProjectService } from '../services/project.service';
import { ObjectId, Types } from 'mongoose';
import { LoggedInUser } from 'src/user/auth/user.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('project')
@ApiTags('project')

export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() createProjectDto: projectDto, @LoggedInUser() userId: ObjectId) {
    console.log('CONTROLLER')
    createProjectDto.createdBy = userId;
    return new ResponseMessage('Successfully created a project', await this.projectService.create(createProjectDto, userId));
  }

  @Get()
  async findAll() {
    return new ResponseMessage('Successfully fetched all project', await this.projectService.findAll());
  }

  @Get('/usersProjects')
  async findAllProjectsAssociatedWithUser(@LoggedInUser() userId){
    return new ResponseMessage('Successfully fetched all projects associated with a user', await this.projectService.allProjectsAUserIsInvolved(userId));
  }

  @Get('/usersProjects/:userId')
  async findAllProjectsAssociatedWithUserInParam(@Param() userId){
    return new ResponseMessage('Successfully fetched all projects associated with a user', await this.projectService.allProjectsAUserIsInvolved(userId));
  }

  
  @Get(':id')
  async findOne(@Param('id') id: ObjectId) {
    return new ResponseMessage('Successfully found a single project', await this.projectService.findOne(id));
  }


  @Get('user/:userId')
  async getASingleUsersDetails(@Param('userId') userId){
    return new ResponseMessage('Successfully found a users project and their tickets successfully', await this.projectService.findUsersAssociatedProject(userId));
  }

  @Get('/:projectId/users')
  async getUsersInAProject(@Param('projectId') projectId: ObjectId){
    return await this.projectService.findUserInACertainProject(projectId);
  }

  @Post('/:projectId/user/:userId')
  async addUserToExistingProject(@Param('projectId') projectId, @Param('userId') userId){
    return await this.projectService.addUserToExistingProject(projectId, userId);
  }

  @Post(':id')
  async update(@Param('id') id: ObjectId, @Body() updateProjectDto: projectDto) {
    return new ResponseMessage('Successfully updated a project', await this.projectService.update(id, updateProjectDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId) {
    return new ResponseMessage('Successfully deleted a project', await this.projectService.remove(id));
  }
}
