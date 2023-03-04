import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { ObjectId } from "mongoose";
import { User } from "src/user/models/user.entity";
import { Bug } from "./bug.entity";
import { Project } from "./project.entity";

@Schema()
export class TicketMembers {
    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: Bug.name })
    ticketId: ObjectId;

    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: Project.name })
    projectId: ObjectId;

    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name })
    memberId: ObjectId;
}

export const ticketMemberSchema = SchemaFactory.createForClass(TicketMembers);

export class ticketMemberDto {
    @ApiProperty()
    ticketId: ObjectId;

    @ApiProperty()
    projectId: ObjectId;

    @ApiProperty()
    memberId: ObjectId;
}