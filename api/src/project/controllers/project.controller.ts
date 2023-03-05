import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseMessage } from 'src/customs/Response';
import { projectDto } from '../models/project.entity';
import { ProjectService } from '../services/project.service';
import { ObjectId } from 'mongoose';
import { LoggedInUser } from 'src/user/auth/user.decorator';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() createProjectDto: projectDto, @LoggedInUser() userId) {
    createProjectDto.createdBy = userId;
    return new ResponseMessage('Successfully created a project', await this.projectService.create(createProjectDto));
  }

  @Get()
  async findAll() {
    return new ResponseMessage('Successfully fetched all project', await this.projectService.findAll());
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId) {
    return new ResponseMessage('Successfully found a single project', await this.projectService.findOne(id));
  }

  @Patch(':id')
  async update(@Param('id') id: ObjectId, @Body() updateProjectDto: projectDto) {
    return new ResponseMessage('Successfully updated a project', await this.projectService.update(id, updateProjectDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId) {
    return new ResponseMessage('Successfully deleted a project', await this.projectService.remove(id));
  }
}
