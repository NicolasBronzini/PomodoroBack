// pomodoro.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pomodoro } from './pomodoro.entity';

@Injectable()
export class PomodoroService {
  constructor(

  
  ) {}

  async create(duration: number) {
  
  }

  // Add methods for update, delete, find, etc.
}
