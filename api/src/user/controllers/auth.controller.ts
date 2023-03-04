import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { LoginDTO, Role } from "../models/item.types";
import { userDto } from "../models/user.entity";
import { UserService } from "../services/user.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ResponseMessage } from "src/customs/Response";
import { ApiTags } from "@nestjs/swagger";

@Controller('auth')
@ApiTags('AUTH')
export class LoginController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    @Post('login')
    async login(@Body() data: LoginDTO){
        const checkUser = await this.userService.findUserByEmail(data.email);
        if(checkUser.length == 0){
            throw new HttpException('User with given details does not exists', HttpStatus.BAD_REQUEST);
        } else {
            //confirm passwords match
            const passwordsMatch = await bcrypt.compare(data.password, checkUser[0].password);
            if(!passwordsMatch){
                throw new HttpException('Details provided do not match', HttpStatus.BAD_REQUEST);
            } else {
                //GENERATE TOKEN
                const userPayload = {
                    sub: checkUser[0].id,
                    email: checkUser[0].email,
                    role: checkUser[0].role
                }

                const payloadItem = await this.jwtService.sign(userPayload);

                return new ResponseMessage('Successfully logged in user', payloadItem);
            }
        }
    }

    @Post('register')
    async register(@Body() data: userDto){
        const checkUser = await this.userService.findUserByEmail(data.email);
        if(checkUser && checkUser.length >= 1){
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        } else {
            //confirm password match
            if(data.password !== data.confirmPassword) 
            throw new HttpException('Passwords provided do not match', HttpStatus.BAD_REQUEST)

            //encrypt password
            const encryptedPass = bcrypt.hashSync(data.password, 10);
            data.password = encryptedPass;
            return new ResponseMessage('Successfully register the user', await this.userService.create(data));
        }
    }
}