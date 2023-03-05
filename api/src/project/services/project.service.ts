import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/models/user.entity';
import { UserService } from 'src/user/services/user.service';
import { Project, projectDto } from '../models/project.entity';
import { ProjectMembers } from '../models/projectMembers.entity';
import { BugService } from './bug.service';

@Injectable()
export class ProjectService {

  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
    @InjectModel(ProjectMembers.name) private projectMembers: Model<ProjectMembers>,
    private bugService: BugService,
    private userService: UserService
  ){}

  //USE BINARY SEARCH TO SPEED UP
  async create(data: projectDto, userId) {
    //check project with same name does not exist
    data.createdBy = userId.userId;
    data.creationDate = new Date();
    const projects = await this.projectModel.find();
    projects.forEach(project => {
      if(project.name.toLowerCase().trim() === data.name.toLowerCase().trim()){
        throw new HttpException('Project already exists', HttpStatus.BAD_REQUEST);
      }
    });

    const projectCreated = await this.projectModel.create(data);

    await this.projectMembers.create({ memberId: data.createdBy, projectId: projectCreated._id });

    if(data.assignedUsers?.length > 0){
      data.assignedUsers.forEach(async user => {
        await this.projectMembers.create({ memberId: user, projectId: projectCreated._id })
      })
    }

    return projectCreated;
  }

  async findAll() {
    return await this.projectModel.find();
  }

  async findOne(id) {
    //GET PROJECT, TICKETS AND ASSIGNED MEMBERS
    const project = await this.projectModel.findById(id);
    const tickets = await this.bugService.findAllTicketsForProject(id);

    if(project){
      return {
        project,
        tickets
      }
    } else {
      throw new HttpException('Project does not exist', HttpStatus.BAD_REQUEST);
    }
  }

  async findProjectById(projectId){
    return await this.projectModel.findById(projectId);
  }

  async update(id, data: projectDto) {
    if(await this.projectModel.findById(id)){
      if(data.assignedUsers?.length > 0){
        await this.projectMembers.deleteMany({ projectId: id });
        data.assignedUsers.forEach(async user => {
          await this.projectMembers.create({ memberId: user, projectId: id})
        })
      }
      return await this.projectModel.findByIdAndUpdate(id, data);
    } else {
      throw new HttpException('Project to update does not exist', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id) {
    if(await this.projectModel.findById(id)){
      await this.bugService.deleteAllTicketsForProject(id);
      await this.projectMembers.deleteMany({ projectId: id });
      return await this.projectModel.findByIdAndDelete(id);
    } else {
      throw new HttpException('Project to delete does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async findUserInACertainProject(projectId) {
    const usersInProject: User[] = [];
    if (await this.findProjectById(projectId)) {
      const users = await this.projectMembers.find({ projectId: projectId });
      
      for(let i = 0; i < users.length; i++){
        let res = await this.userService.findOne(users[i].memberId);
        usersInProject.push(res);
      }

      return usersInProject;

    } else
      throw new HttpException('Project given ID does not exists', HttpStatus.BAD_REQUEST);
  }
}
