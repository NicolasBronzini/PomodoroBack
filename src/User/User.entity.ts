// src/user/entities/user.entity.ts

import { ApiProperty } from '@nestjs/swagger';
import { Pomodoro } from 'src/Pomodoro/pomodoro.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    BeforeInsert,
  } from 'typeorm';
  import { Length } from 'class-validator';
  import { v4 as uuidv4 } from 'uuid';

  @Entity('users')
  export class User {
    @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  @Length(1, 50)
  uuid: string = uuidv4();

  @ApiProperty()
  @Column('varchar')
  @Length(4, 20)
  username: string;

  @ApiProperty()
  @Column('varchar')
  @Length(4, 100)
  password: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

    // Relation with Pomodoros
    @OneToMany(() => Pomodoro, (pomodoro) => pomodoro.user)
    pomodoros: Pomodoro[];

    @BeforeInsert()
    generateUuid() {
      this.uuid = uuidv4();
    }
  
  }
  