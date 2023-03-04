import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, userDto } from '../models/user.entity';

@Injectable()
export class UserService {
  
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ){}

  async create(data: userDto) {
    return await this.userModel.create(data);
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id) {
    return await this.userModel.findById(id);
  }

  async update(id, data: User) {
    if(await this.userModel.findById(id)){
      return await this.userModel.findByIdAndUpdate(id, data);
    } else {
      throw new HttpException("User with provided credentials does not exists", HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id) {
    if(await this.userModel.findById(id)){
      return await this.userModel.findByIdAndDelete(id);
    } else {
      throw new HttpException('User with provided id does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async findUserByEmail(email: string){
    return await this.userModel.find({ email: email });
  }
}
