import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { LocalStrategy } from './strategies/local.strategy';
import * as dotenv from 'dotenv';
import { UserModule } from 'src/user/user.module';
dotenv.config();
@Module({
  imports:[
    PassportModule,
   JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
    UserModule,
    JwtModule
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,]
})
export class AuthModule {}
