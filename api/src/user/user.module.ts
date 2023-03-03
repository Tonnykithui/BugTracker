import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import { privateKey } from './auth/auth.constants';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './models/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: userSchema }
    ])
  ],
  controllers: [UserController],
  providers: [
    UserService
  ]
})
export class UserModule {}
