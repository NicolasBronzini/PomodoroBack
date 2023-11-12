// pomodoro.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';

@Controller('pomodoro')
export class PomodoroController {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @Post()
  async create(@Body('duration') duration: number) {
    return this.pomodoroService.create(duration);
  }

  // Add routes for getting, updating, and deleting pomodoros
}
