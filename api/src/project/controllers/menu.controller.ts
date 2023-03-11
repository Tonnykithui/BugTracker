import { Controller, Get } from "@nestjs/common";
import { HelpersService } from "src/customs/helpers.service";
import { LoggedInUser } from "src/user/auth/user.decorator";

@Controller('menu')
export class MenuController {
    constructor(
        private helperService: HelpersService
    ){}

    @Get()
    async getMenuItems(@LoggedInUser() userId){
        return await this.helperService.getAllMenus(userId)
    }
}