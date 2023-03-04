import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "./item.types";

@Schema()
export class User {
    @Prop()
    public firstname: string;

    @Prop()
    public lastname: string;

    @Prop()
    public email: string;

    @Prop()
    public phone: string;

    @Prop()
    public password: string;

    @Prop({ default: Role.DEVELOPER })
    public role: Role[]

}

export const userSchema = SchemaFactory.createForClass(User);

export class userDto {
    @ApiProperty()
    public firstname: string;

    @ApiProperty()
    public lastname: string;

    @ApiProperty()
    public email: string;

    @ApiProperty()
    public phone: string;

    @ApiProperty()
    public password: string;

    @ApiProperty()
    public confirmPassword: string;

    @ApiProperty()
    public role: Role[]
}