import { Module } from '@nestjs/common';
import { ProjectService } from './services/project.service';
import { ProjectController } from './controllers/project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketMembers, ticketMemberSchema } from './models/ticketMembers.entity';
import { ProjectMembers, projectMembersSchema } from './models/projectMembers.entity';
import { Bug, bugSchema } from './models/bug.entity';
import { Comment, commentSchema } from './models/comment.entity';
import { Project, projectSchema } from './models/project.entity';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TicketMembers.name, schema: ticketMemberSchema },
      { name: ProjectMembers.name, schema: projectMembersSchema },
      { name: Bug.name, schema: bugSchema },
      { name: Comment.name, schema: commentSchema },
      { name: Project.name, schema: projectSchema }
    ])
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
