import { HttpException, HttpStatus, Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { HelpersService } from 'src/customs/helpers.service';
import { User } from 'src/user/models/user.entity';
import { UserService } from 'src/user/services/user.service';
import { Project, projectDto } from '../models/project.entity';
import { ProjectMembers } from '../models/projectMembers.entity';
import { BugService } from './bug.service';

@Injectable()
export class ProjectService implements OnModuleInit {

  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
    @InjectModel(ProjectMembers.name) private projectMembers: Model<ProjectMembers>,
    private bugService: BugService,
    private userService: UserService,
    private helperService: HelpersService
  ) { }

  async onModuleInit() {
    await this.helperService.createMenu()
  }

  //USE BINARY SEARCH TO SPEED UP
  async create(data: projectDto, userId) {
    //check project with same name does not exist
    data.createdBy = userId.userId;
    data.creationDate = new Date();
    const projects = await this.projectModel.find();
    projects.forEach(project => {
      if (project.name.toLowerCase().trim() === data.name.toLowerCase().trim()) {
        throw new HttpException('Project already exists', HttpStatus.BAD_REQUEST);
      }
    });

    const projectCreated = await this.projectModel.create(data);

    await this.projectMembers.create({ memberId: data.createdBy, projectId: projectCreated._id });

    if (data.assignedUsers?.length > 0) {
      data.assignedUsers.forEach(async user => {
        (await this.projectMembers.create({ memberId: user, projectId: projectCreated._id }))
      })
    }

    return projectCreated;
  }

  async findAll() {
    //get all projects
    const allProjects = await this.projectModel.find();
    let returnRes: Project[] = [];
    for (let i = 0; i < allProjects.length; i++) {
      const element = allProjects[i];
      let userExists = await this.userService.findOne(element.createdBy)
      if(userExists){
        returnRes.push(await element.populate('createdBy', { firstname: 1, lastname: 1 }))
      } else {
        returnRes.push(element);
      }
    }
    return returnRes;
  }

  async findOne(id) {
    //GET PROJECT, TICKETS AND ASSIGNED MEMBERS
    const project = await this.projectModel.findById(id).populate('createdBy', { firstname: 1, lastname: 1 });
    const tickets = await this.bugService.findAllTicketsForProject(id);
    const assignedProjectMembers = await this.findUserInACertainProject(id);
    const projectComplete = await this.bugService.countCompletedBugsForProject(id);

    let perc = (projectComplete / tickets.length) * 100;

    if (project) {
      return {
        project,
        tickets,
        assignedProjectMembers,
        perc
      }
    } else {
      throw new HttpException('Project does not exist', HttpStatus.BAD_REQUEST);
    }
  }

  async findUsersAssociatedProject(userId){
   let usersProjects = await this.projectMembers.find({ memberId: userId })
   .populate('projectId', { name: 1 });
   let user = await this.userService.findOne(userId);
   let usersTickets = await this.bugService.findUsersOpenClosedNInprogressTickets(userId);
   
   return {
    usersProjects,
    usersTickets,
    user
   }
  }

  async findProjectById(projectId) {
    return await this.projectModel.findById(projectId);
  }

  async update(id, data: projectDto) {
    if (await this.projectModel.findById(id)) {
      if (data.assignedUsers?.length > 0) {
        data.assignedUsers.forEach(async user => {
          if (!((await this.projectMembers.find({ projectId: id, memberId: user })).length > 0))
            await this.projectMembers.create({ memberId: user, projectId: id })
        })
      }
      return await this.projectModel.findByIdAndUpdate(id, data);
    } else {
      throw new HttpException('Project to update does not exist', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id) {
    if (await this.projectModel.findById(id)) {
      let ticketsToDelete = await this.bugService.deleteAllTicketsForProject(id);
      let membersToDelete = await this.projectMembers.deleteMany({ projectId: id });
      return await this.projectModel.findByIdAndDelete(id);
    } else {
      throw new HttpException('Project to delete does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async findUserInACertainProject(projectId) {
    const usersInProject: User[] = [];
    if (await this.findProjectById(projectId)) {
      const users = await this.projectMembers.find({ projectId: projectId });

      for (let i = 0; i < users.length; i++) {
        let res = await this.userService.findOne(users[i].memberId);
        if(res) {
          usersInProject.push(res);
        } else {
          await this.projectMembers.findOneAndRemove({
            memberId: users[i].memberId
          })
        }
      }
      return usersInProject;
    } else
      throw new HttpException('Project given ID does not exists', HttpStatus.BAD_REQUEST);
  }

  async removeUserFromProject(projectId, userId) {
    if (await this.findProjectById(projectId)) {
      return await this.projectMembers.deleteMany({ projectId: projectId, memberId: userId });
    } else
      throw new HttpException("Project does not exists", HttpStatus.BAD_REQUEST);
  }

  async allProjectsAUserIsInvolved(userId){
    let newUserId = new Types.ObjectId(userId.userId)
    let projects = await this.projectMembers.find({ memberId: newUserId });

    let projectsInvolved: Project[] = await Promise.all(projects.map(async(project) => {
      let proj = await this.projectModel.findById(project.projectId);
      if(proj){
        return proj;
      } else {
        await this.projectMembers.findByIdAndRemove({
          projectId: project.projectId
        });
      }
    }));

    return projectsInvolved;
  }

  async addUserToExistingProject(projectId, userId){
    //Find the project
    const newProjectId = new Types.ObjectId(projectId);
    const newUserId = new Types.ObjectId(userId);

    const project = await this.projectModel.findOne(newProjectId);
    //Find the user
    const user = await this.userService.findOne(newUserId);
    //If both are present then check user already assigned to same project and assign if else
    if(project && user){
      const userInProjectAlready = await this.projectMembers.findOne({
        memberId: newUserId,
        projectId: newProjectId
      });

      if(userInProjectAlready){
        throw new HttpException('User already exists in the project', HttpStatus.BAD_REQUEST);
      } else {
        return await this.projectMembers.create({
          memberId: newUserId,
          projectId: newProjectId
        })
      }
    } else {
      throw new HttpException('Either the user or the project does not exists', HttpStatus.BAD_REQUEST);
    }
  }
}
