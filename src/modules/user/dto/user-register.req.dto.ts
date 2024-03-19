import { REGEX, MESSAGES } from './../../../app.utils';
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterRequestDto {
    
    @IsNotEmpty()
    @Length(3, 255)
    @ApiProperty({
        name: 'name',
        example: 'John Smith'
    })
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        name: 'email',
        example: 'john.smith@hotmail.com'
    })
    email: string;
    
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    @ApiProperty({
        name: 'password',
        example: 'password@123'
    })
    password: string;
    
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    @ApiProperty({
        name: 'confirm',
        example: 'password@123'
    })
    confirm: string;
}