import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { ObjectId } from "mongoose";
import { User } from "src/user/models/user.entity";

@Schema()
export class Project {
        @Prop()
        public  name: string;

        @Prop()
        public description: string;

        @Prop()
        public creationDate: Date;

        @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name })
        public  createdBy: ObjectId;
}

export const projectSchema = SchemaFactory.createForClass(Project);

export class projectDto {
        @ApiProperty()
        public name: string;

        @ApiProperty()
        public description: string;

        @ApiProperty()
        public creationDate: Date;
        
        @ApiProperty()
        public createdBy: ObjectId;
}