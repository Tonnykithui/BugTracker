import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from '../models/item.types';
import { User, userDto } from '../models/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }

  async create(data: userDto) {
    return await this.userModel.create(data);
  }

  async findAll() {
    return await this.userModel.find()
      .sort({ "firstname": 1 })
      .collation({ locale: "en_US", numericOrdering: true });
  }

  async findOne(id) {
    return await this.userModel.findById(id);
  }

  async update(id, data: User) {
    if (await this.userModel.findById(id)) {
      return await this.userModel.findByIdAndUpdate(id, data);
    } else {
      throw new HttpException("User with provided credentials does not exists", HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id) {
    if (await this.userModel.findById(id)) {
      return await this.userModel.findByIdAndDelete(id);
    } else {
      throw new HttpException('User with provided id does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async findUserByEmail(email: string, phone?: string) {
    return await this.userModel.find({ $or: [{ email: email }, { phone: phone }] });
  }

  async assignUserOtherRole(userId, loggedInUserId, role) {
    const checkAssigningUserRole = await this.findOne(loggedInUserId);
    if (checkAssigningUserRole.role.includes(Role.PROJECTMANAGER)) {
      const userToAssignRole = await this.findOne(userId);
      userToAssignRole.role.push(role);
    } else {
      throw new HttpException('User not allowed to assign role', HttpStatus.BAD_REQUEST);
    }
  }
}
