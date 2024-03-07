import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { Injectable } from "@nestjs/common";
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    
    async doUserRegistration(userReg: UserRegisterRequestDto): Promise<User> {
        
        
        const user = new User();
        user.name = userReg.name;
        user.email = userReg.email;
        user.password = userReg.password;

        return await user.save();
    }

    async getUserByEmail(email: string): Promise<User | undefined> {
        return User.findOne({where: {
            email: email
        }})
    }
}