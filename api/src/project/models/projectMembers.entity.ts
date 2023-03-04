import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { ObjectId } from "mongoose";
import { User } from "src/user/models/user.entity";
import { Project } from "./project.entity";

@Schema()
export class ProjectMembers {
    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: Project.name })
    projectId: ObjectId;

    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name })
    memberId: ObjectId;
}

export const projectMembersSchema = SchemaFactory.createForClass(ProjectMembers);

export class projectMembersDto {
    @ApiProperty()
    projectId: ObjectId;

    @ApiProperty()
    memberId: ObjectId
}