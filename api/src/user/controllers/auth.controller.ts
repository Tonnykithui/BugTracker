import { Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { LoginDTO, Role } from "../models/item.types";
import { userDto } from "../models/user.entity";
import { UserService } from "../services/user.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class Login {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    @Post('login')
    async login(data: LoginDTO){
        const checkUser = await this.userService.findUserByEmail(data.email);
        if(!checkUser && checkUser.length == 0){
            throw new HttpException('User with given details does not exists', HttpStatus.BAD_REQUEST);
        } else {
            //confirm passwords match
            const passwordsMatch = bcrypt.compare(data.password, checkUser[0].password);
            if(!passwordsMatch){
                throw new HttpException('Details provided do not match', HttpStatus.BAD_REQUEST);
            } else {
                //GENERATE TOKEN
                type payload = {
                    sub: string,
                    email: string,
                    role: Role[]
                }

                const userPayload = {
                    sub: checkUser[0].id,
                    email: checkUser[0].email,
                    role: checkUser[0].role
                }

                return await this.jwtService.sign(userPayload);;
            }
        }
        return 'LOGGED IN'
    }

    @Post('register')
    async register(data: userDto){
        const checkUser = await this.userService.findUserByEmail(data.email);
        if(checkUser){
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        } else {
            //confirm password match
            if(data.password !== data.confirmPassword) 
            throw new HttpException('Passwords provided do not match', HttpStatus.BAD_REQUEST)

            //encrypt password
            const encryptedPass = bcrypt.hashSync(data.password, 10);
            data.password = encryptedPass;
            return await this.userService.create(data);;
        }
    }
}