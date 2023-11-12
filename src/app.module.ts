// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PomodoroModule } from './Pomodoro/Pomodoro.module';
import { Pomodoro } from './Pomodoro/pomodoro.entity';
import { PomodoroController } from './Pomodoro/pomodoro.controller';
import { PomodoroService } from './Pomodoro/pomodoro.service';
import { User } from './User/User.entity';
import { UserModule } from './User/User.module';
import { UserController } from './User/User.controller';
import { UserService } from './User/User.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // specify mysql here
      host: 'localhost',
      port: 3306, // default MySQL port
      username: 'root',
      password: '123456',
      database: 'pomodorodb',
      entities: [Pomodoro,User,],
   
      // other options
    }),
    PomodoroModule, 
    UserModule,
    // ... other modules
  ],
  controllers: [
    PomodoroController,
    UserController
  ],
  providers: [
    PomodoroService,
    UserService
   
  ],

})
export class AppModule {}
