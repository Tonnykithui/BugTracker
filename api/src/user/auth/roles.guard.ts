import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Role } from "../models/item.types";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private jwtService: JwtService
    ) { }

    // : boolean | Promise<boolean> | Observable<boolean>
    canActivate(context: ExecutionContext) {
        const roles = this.reflector.getAllAndOverride<Role[]>('roles',
            [
                context.getHandler(),
                context.getClass()
            ]);

        if(!roles){
            return true;
        }

        const req = context.switchToHttp().getRequest();
        console.log(req.rawHeaders);
        const bearerToken = req.rawHeaders.find((item) => item.split(' ') [0] == 'Bearer');
        console.log(bearerToken);
        let token = bearerToken.split(' ')[1];
        // console.log(this.jwtService.decode(token));
        return true;
    }
}