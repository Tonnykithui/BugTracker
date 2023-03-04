import { Injectable } from '@nestjs/common';
import { projectDto } from '../models/project.entity';

@Injectable()
export class ProjectService {
  async create(createProjectDto: projectDto) {
    return await 'This action adds a new project';
  }

  async findAll() {
    return await `This action returns all project`;
  }

  async findOne(id) {
    return await `This action returns a #${id} project`;
  }

  async update(id, updateProjectDto: projectDto) {
    return await `This action updates a #${id} project`;
  }

  async remove(id) {
    return await `This action removes a #${id} project`;
  }
}
