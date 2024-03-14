import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-naver';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class JwtNaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: process.env.NAVER_CALLBACK_URL,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    try {
      const user_email = profile._json.email;
      const user_nick = profile._json.nickname;
      const user_provider = profile.provider;
      const user_profile = {
        user_email,
        user_nick,
        user_provider,
      };
      console.log(user_profile);
      done(null, user_profile);
    } catch (err) {
      console.error(err);
      done(err, false);
    }
  }
}
