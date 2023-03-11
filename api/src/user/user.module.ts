import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { privateKey } from './auth/auth.constants';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './models/user.entity';
import { LoginController } from './controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: userSchema }
    ]),
    JwtModule.register({
      secret: privateKey
    }),
    PassportModule
  ],
  controllers: [
    UserController,
    LoginController
  ],
  providers: [
    UserService,
    JwtStrategy,
    AuthService
  ],
  exports: [UserService]
})
export class UserModule { }
