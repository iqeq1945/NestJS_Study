import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtNaverStrategy } from './jwt-social-naver.strategy';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AuthService, JwtNaverStrategy, UserService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
