import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';


export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() 
        });
    }

    async validate(payload: any): Promise<any> {
        return {
            id: payload.subject,
            name: payload.name,
            tenant: 'localusrs'
        }
    }
}