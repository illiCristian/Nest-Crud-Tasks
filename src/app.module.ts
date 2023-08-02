import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Task1Module } from './task1/task1.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      '',
    ),
    TaskModule,
    Task1Module,
  ],
})
export class AppModule {}
