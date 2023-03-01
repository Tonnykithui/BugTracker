import { Injectable } from '@nestjs/common';
import { bugDto } from '../models/bug.entity';

@Injectable()
export class BugService {
  create(createBugDto: bugDto) {
    return 'This action adds a new bug';
  }

  findAll() {
    return `This action returns all bug`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bug`;
  }

  update(id: number, updateBugDto: bugDto) {
    return `This action updates a #${id} bug`;
  }

  remove(id: number) {
    return `This action removes a #${id} bug`;
  }
}
