import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { ObjectId } from "mongoose";
import { User } from "src/user/models/user.entity";
import { Project } from "./project.entity";

enum bugPriority {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}

enum bugStatus {
    CLOSE = 'CLOSED',
    OPEN = 'OPEN',
    INPROGRESS = 'INPROGRESS'
}

@Schema()
export class Bug {
    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: Project.name })
    public projectId: ObjectId;

    @Prop()
    public title: string;

    @Prop()
    public description: string;

    @Prop({ default: bugPriority.LOW })
    public priority: bugPriority

    @Prop({ default: bugStatus.OPEN })
    public status: bugStatus;

    @Prop()
    public reportDate: Date;

    @Prop()
    public dueDate: Date;

    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name })
    public ticketOwner: ObjectId;

    @Prop()
    public estimateTime: string;

    @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name })
    lastUpdatedBy: ObjectId;

}

export const bugSchema = SchemaFactory.createForClass(Bug);

export class bugDto {

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public description: string;

    @ApiProperty()
    public priority: bugPriority

    @ApiProperty()
    public status: bugStatus;

    @ApiProperty()
    public reportDate: Date;

    @ApiProperty()
    public dueDate: Date;

    @ApiProperty()
    public estimateTime: string;

    public ticketOwner: ObjectId;

    projectId: ObjectId;

    lastUpdatedBy: ObjectId;

    @ApiProperty()
    assignedUsers: ObjectId[];
}