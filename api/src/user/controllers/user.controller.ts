import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User, userDto } from '../models/user.entity';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../models/item.types';
import { JwtAuthGuard } from '../auth/jwt.authguard';
import { ResponseMessage } from 'src/customs/Response';
import { ObjectId } from 'mongoose';
import { LoggedInUser } from '../auth/user.decorator';

@Controller('user')
@UseGuards(RolesGuard)
@Roles(Role.PROJECTMANAGER, Role.DEVELOPER)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: userDto) {
    return new ResponseMessage('Successfully created a user', await this.userService.create(createUserDto));
  }

  @Get()
  async findAll() {
    return new ResponseMessage('Successfully fetched all users records', await this.userService.findAll());
  }

  @Get(':id')
  async findOne(@Param('id') id: ObjectId) {
    return new ResponseMessage('Successfully fetched a single user details', await this.userService.findOne(id));
  }

  @Patch(':id')
  async update(@Param('id') id: ObjectId, @Body() updateUserDto: User) {
    return new ResponseMessage('Successfully updated a single user details', await this.userService.update(id, updateUserDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: ObjectId) {
    return new ResponseMessage('Successfully deleted a user details', await this.userService.remove(id));
  }
}
