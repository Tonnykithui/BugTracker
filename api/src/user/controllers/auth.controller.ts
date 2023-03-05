import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { LoginDTO, Role } from "../models/item.types";
import { userDto } from "../models/user.entity";
import { UserService } from "../services/user.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ResponseMessage } from "src/customs/Response";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "../services/auth.service";
import { LoggedInUser } from "../auth/user.decorator";

@Controller('auth')
@ApiTags('AUTH')
export class LoginController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private authService: AuthService
    ){}

    @Post('login')
    async login(@Body() data: LoginDTO){
        return new ResponseMessage('Successfully logged in the user', await this.authService.loginUser(data));
    }

    @Post('register')
    async register(@Body() data: userDto, @LoggedInUser() userId){
        return new ResponseMessage('Successfully register the user', await this.authService.registerUser(data));
    }
}