import { UserService } from './../user/user.service';
import { User } from './../user/user.entity';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) {

    }
    
    async validateUserCreds(email: string, password: string): Promise<User | undefined> {
        const user = await this.userService.getUserByEmail(email);
        if (!user) {
            throw new BadRequestException();
        }

        const validPass = await bcrypt.compare(password, user.password);
        
        if (!validPass) {
            throw new UnauthorizedException();
        }

        return user;
    }

    async generateToken(user: any): Promise<any> {
        return {
            access_token: this.jwtService.sign({
                name: user.name,
                subject: user.id
            })
        };
    }
}
