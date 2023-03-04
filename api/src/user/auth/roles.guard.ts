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

    canActivate(context: ExecutionContext) {
        const roles = this.reflector.getAllAndOverride<Role[]>('roles',
            [
                context.getHandler(),
                context.getClass()
            ]);

        if (!roles) {
            return true;
        }

        const req = context.switchToHttp().getRequest();
    
        const bearerToken = req.rawHeaders.find((item) => item.split(' ')[0] == 'Bearer');

        let token = bearerToken.split(' ')[1];
        let decodedToken = this.jwtService.decode(token);

        type tokenDetails = {
            sub: string,
            email: string,
            role: Role[],
            iat: number
        }
        const { role, ...rest } = decodedToken as tokenDetails;

        return roles.some((item) => role?.includes(item));
    }
}