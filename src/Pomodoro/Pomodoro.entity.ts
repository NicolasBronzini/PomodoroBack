// pomodoro.entity.ts

import { User } from 'src/User/User.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Pomodoro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  duration: number;

  @Column({ default: false })
  isComplete: boolean;
  
  // User relation
  @ManyToOne(() => User, (user) => user.pomodoros)
  user: User;
  // Add more fields as necessary
}
