// pomodoro.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pomodoro } from './pomodoro.entity';
import { PomodoroService } from './pomodoro.service';
import { PomodoroController } from './pomodoro.controller';
import { User } from 'src/User/User.entity';

@Module({
  imports: [   TypeOrmModule.forFeature([User, Pomodoro]),],
  providers: [PomodoroService],
  controllers: [PomodoroController,],
  exports: [PomodoroService , TypeOrmModule.forFeature([Pomodoro])],
})
export class PomodoroModule {}
