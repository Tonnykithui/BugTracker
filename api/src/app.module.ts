import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './customs/globException';
import { ProjectModule } from './project/project.module';
import { privateKey } from './user/auth/auth.constants';
import { JwtAuthGuard } from './user/auth/jwt.authguard';
import { RolesGuard } from './user/auth/roles.guard';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProjectModule, 
    UserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/bugtracker')
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule {}
