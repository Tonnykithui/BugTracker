import { Injectable } from '@nestjs/common';
import { projectDto } from '../models/project.entity';

@Injectable()
export class ProjectService {
  create(createProjectDto: projectDto) {
    return 'This action adds a new project';
  }

  findAll() {
    return `This action returns all project`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: projectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
