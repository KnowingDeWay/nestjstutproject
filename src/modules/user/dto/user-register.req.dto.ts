import { REGEX, MESSAGES } from './../../../app.utils';
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class UserRegisterRequestDto {
    
    @IsNotEmpty()
    @Length(3, 255)
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    password: string;
    
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    confirm: string;
}