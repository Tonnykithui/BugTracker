import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './user/auth/jwt.authguard';
import { Roles } from './user/auth/roles.decorator';
import { RolesGuard } from './user/auth/roles.guard';
import { Role } from './user/models/item.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
