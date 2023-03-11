import { Module } from '@nestjs/common';
import { ProjectService } from './services/project.service';
import { ProjectController } from './controllers/project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketMembers, ticketMemberSchema } from './models/ticketMembers.entity';
import { ProjectMembers, projectMembersSchema } from './models/projectMembers.entity';
import { Bug, bugSchema } from './models/bug.entity';
import { Comment, commentSchema } from './models/comment.entity';
import { Project, projectSchema } from './models/project.entity';
import { BugController } from './controllers/bug.controller';
import { CommentController } from './controllers/comment.controller';
import { BugService } from './services/bug.service';
import { CommentService } from './services/comment.service';
import { UserModule } from 'src/user/user.module';
import { Menu, menuSchema } from './models/menu.entity';
import { HelpersService } from 'src/customs/helpers.service';
import { MenuController } from './controllers/menu.controller';


@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([
      { name: TicketMembers.name, schema: ticketMemberSchema },
      { name: ProjectMembers.name, schema: projectMembersSchema },
      { name: Bug.name, schema: bugSchema },
      { name: Comment.name, schema: commentSchema },
      { name: Project.name, schema: projectSchema },
      { name: Menu.name, schema: menuSchema }
    ])
  ],
  controllers: [ProjectController, BugController, CommentController, MenuController],
  providers: [ProjectService, BugService, CommentService, HelpersService]
})
export class ProjectModule {}
