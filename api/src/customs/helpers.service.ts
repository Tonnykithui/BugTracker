import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Menu } from "src/project/models/menu.entity";
import { UserService } from "src/user/services/user.service";
import { menuLinks } from "./menu.data";

@Injectable()
export class HelpersService {
    constructor(
        @InjectModel(Menu.name) private menuModel: Model<Menu>,
        private userService: UserService
    ){}

    async createMenu(){
        if(await (await this.menuModel.find()).length == 0){
            return await this.menuModel.insertMany(menuLinks);
        }
    }

    async getAllMenus(userId){
        const userRoles = await this.userService.findOne(userId.userId);
        const userRole = userRoles.role[0];
        const menus = await this.menuModel.find();
        const userMenus: Menu[] = [];
        for(let i = 0; i < menus.length; i++){
            if(menus[i].users.includes(userRole)){
                userMenus.push(menus[i]);
            }
        }
        return userMenus;
    }
}