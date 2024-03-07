import { User } from './user.entity';
import { SETTINGS } from './../../app.utils';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { UserService } from './user.service';
import { Body, Controller, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";

@Controller('user')
export class UserController {

    constructor (private userService: UserService) {

    }

    @Post('/register')
    async doUserRegistration(@Body((SETTINGS.VALIDATION_PIPE)) userReg: UserRegisterRequestDto): Promise<User> {
        return await this.userService.doUserRegistration(userReg);
    }
}