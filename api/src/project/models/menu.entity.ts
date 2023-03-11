import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "src/user/models/item.types";

@Schema()
export class Menu {
    @Prop()
    path: string;

    @Prop()
    title: string;

    @Prop()
    icon: string;

    @Prop()
    users: Role[]
}

export const menuSchema = SchemaFactory.createForClass(Menu);

