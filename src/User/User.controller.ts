// pomodoro.controller.ts

import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './User.service';
import { User } from './User.entity';
import { ApiTags } from '@nestjs/swagger';

const controllerConfig = {
    name: 'user',
  };
  
@ApiTags(controllerConfig.name)
@Controller(controllerConfig.name)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() user: User) {
    try {
      const CreateUser = await this.userService.create(user);
      return CreateUser;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  // Add routes for getting, updating, and deleting pomodoros
}


