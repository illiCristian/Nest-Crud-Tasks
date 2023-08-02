import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Task1Module } from './task1/task1.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://svrk73:qeS9S9bZ4oHZQuIb@cluster0.6jukxnz.mongodb.net/nestMongodb',
    ),
    TaskModule,
    Task1Module,
  ],
})
export class AppModule {}
