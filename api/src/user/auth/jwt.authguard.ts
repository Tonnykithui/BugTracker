import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        const classString = context.getClass().toString();
        const result =
            classString.toLowerCase().includes('logincontroller')
                ? true
                : super.canActivate(context);
        return result;
    }
}