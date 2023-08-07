import { HttpException, HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Role } from '../models/item.types';
import { User, userDto } from '../models/user.entity';
import { ProjectService } from 'src/project/services/project.service';
import { BugService } from 'src/project/services/bug.service';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }

  async create(data: userDto) {
    return await this.userModel.create(data);
  }

  async findAll(userId) {
    let newUserId = new Types.ObjectId(userId.userId)
    return await this.userModel.find({ _id: { $ne: newUserId } }).select('-password')
      .sort({ "firstname": 1 })
      .collation({ locale: "en_US", numericOrdering: true });
  }

  async findOne(id) {
    return await this.userModel.findById(id).select('-password');
  }

  async update(id, data: User) {
    if (await this.userModel.findById(id)) {
      return await this.userModel.findByIdAndUpdate(id, data).select('-password');
    } else {
      throw new HttpException("User with provided credentials does not exists", HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id) {
    if (await this.userModel.findById(id)) {
      //find if user is assigned project or tickets and delete their records

      return await this.userModel.findByIdAndDelete(id).select('-password');
    } else {
      throw new HttpException('User with provided id does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async findUserByEmailOrPhone(email: string, phone?: string) {
    if(phone != ""){
      return await this.userModel.findOne({ $or: [{ email: email }, { phone: phone }] }).select('-password');
    } else {
      return await this.userModel.findOne({ email: email });
    }
  }

  async findUserByEmail(email: string){
    return await this.userModel.findOne({ email: email });
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
