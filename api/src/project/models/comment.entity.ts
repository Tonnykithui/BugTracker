import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { ObjectId } from "mongoose";
import { User } from "src/user/models/user.entity";
import { Bug } from "./bug.entity";

@Schema()
export class Comment {
    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: Bug.name })
    public ticketId: ObjectId;

    @Prop()
    public message: string;

    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name })
    public Owner: ObjectId;

    @Prop()
    public submitTime: Date;

}

export const commentSchema = SchemaFactory.createForClass(Comment);

export class commentDto {
    @ApiProperty()
    public message: string;

    public Owner: ObjectId;

    public ticketId: ObjectId;

    public submitTime: Date;
}