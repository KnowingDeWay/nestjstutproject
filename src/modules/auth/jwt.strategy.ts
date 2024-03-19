import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import appConfig from 'src/config/app.config';


export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKey: appConfig().appSecret,
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