import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import {  TasksService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from 'src/schemas/task.schema';
import { Task } from './task.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TasksService],
})
export class TaskModule {}
