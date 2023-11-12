// pomodoro.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    // Check if user already exists
    const userExists = await this.usersRepository.findOne({
      where: { email: user.email },
    });

    if (userExists) {
      throw new Error('Email already in use.');
    }

    // Create new user
    const newUser = this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  // Add methods for update, delete, find, etc.
}
