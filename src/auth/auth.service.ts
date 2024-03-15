import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async OAuthLogin({ req, res }) {
    let user = await this.userService.user({ email: req.user.email });

    if (!user) user = await this.userService.createUser({ ...req.user });

    res.redirect('https://www.naver.com/');
  }
}
