import { HttpException, HttpStatus, Injectable, OnModuleInit } from "@nestjs/common";
import { UserService } from "./user.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { User, userDto } from "../models/user.entity";
import { Role } from "../models/item.types";

@Injectable()
export class AuthService implements OnModuleInit {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async onModuleInit() {
        await this.createSuperUser();
    }

    async loginUser(data) {
        const checkUser = await this.userService.findUserByEmail(data.email);
        if (checkUser.length == 0) {
            throw new HttpException('User with given details does not exists', HttpStatus.BAD_REQUEST);
        } else {
            //confirm passwords match
            const passwordsMatch = await bcrypt.compare(data.password, checkUser[0].password);
            if (!passwordsMatch) {
                throw new HttpException('Details provided do not match', HttpStatus.BAD_REQUEST);
            } else {
                //GENERATE TOKEN
                const userPayload = {
                    sub: checkUser[0]._id,
                    email: checkUser[0].email,
                    role: checkUser[0].role
                }

                const payloadItem = await this.jwtService.sign(userPayload);

                return payloadItem;
            }
        }
    }

    async registerUser(data) {
        const emailIsValid = await this.validateEmail(data.email);
        if (emailIsValid) {
            const checkUser = await this.userService.findUserByEmail(data.email, data.phone);
            if (checkUser && checkUser.length >= 1) {
                throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
            } else {
                //confirm password match
                if (data.password !== data.confirmPassword)
                    throw new HttpException('Passwords provided do not match', HttpStatus.BAD_REQUEST)

                //encrypt password
                const encryptedPass = bcrypt.hashSync(data.password, 10);
                data.password = encryptedPass;

                return await this.userService.create(data)
            }
        } else {
            throw new HttpException('Invalid email address provided', HttpStatus.BAD_REQUEST);
        }
    }

    async validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    async createSuperUser(){
        if(await (await this.userService.findUserByEmail('test@gmail.com')).length == 0){
            const superPass = '1234567';
            const encryptedPass = await bcrypt.hash(superPass, 10);
    
            const superAdmin: userDto = {
                email: 'test@gmail.com',
                firstname: 'super',
                lastname: 'admin',
                password: encryptedPass,
                confirmPassword: encryptedPass,
                phone: '0793011434',
                role: [Role.PROJECTMANAGER]
            }

            return await this.userService.create(superAdmin);
        }
    }
}