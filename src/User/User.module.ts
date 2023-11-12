// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './User.entity';
import { UserService } from './User.service';
import { UserController } from './User.controller';
import { Pomodoro } from 'src/Pomodoro/pomodoro.entity';


@Module({
  imports: [ TypeOrmModule.forFeature([User, Pomodoro]),],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService, TypeOrmModule.forFeature([User])], // Export UserService if other modules need to inject it
})
export class UserModule {}
