import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
//     canActivate(context: ExecutionContext){
//         const controller = context.getClass().toString();

//         const allowPass = 
//         controller.toLowerCase().includes('login') ? true : super.canActivate(context);
//         // controller.toLowerCase().includes('login') ||
//         // controller.toLowerCase().includes('login')
// return allowPass;
//     }
}