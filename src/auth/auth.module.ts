import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtNaverStrategy } from './jwt-social-naver.strategy';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, JwtNaverStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
