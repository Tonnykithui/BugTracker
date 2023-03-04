import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bug, bugDto } from '../models/bug.entity';

@Injectable()
export class BugService {
  constructor(
    @InjectModel(Bug.name) private bugModel: Model<Bug>
  ){}

  async create(createBugDto: bugDto) {
    return await 'This action adds a new bug';
  }

  async findAll() {
    return await `This action returns all bug`;
  }

  async findOne(id: number) {
    return await `This action returns a #${id} bug`;
  }

  async update(id: number, updateBugDto: bugDto) {
    return await `This action updates a #${id} bug`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} bug`;
  }
}
