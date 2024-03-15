import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  async test(): Promise<any> {
    return 'test';
  }
  @Get(':id')
  async getUserInfo(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id });
  }
  @Post('signup')
  async signupUser(
    @Body() userData: { email: string; name: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
