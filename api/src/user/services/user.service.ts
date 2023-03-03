import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, userDto } from '../models/user.entity';

@Injectable()
export class UserService {
  
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ){}

  async create(data: User) {
    return await this.userModel.create(data);
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, data: User) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findUserByEmail(email: string){
    return await this.userModel.find({ email: email });
  }
}
