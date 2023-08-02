import { Injectable } from '@nestjs/common';
import { CreateTask1Dto } from './dto/create-task1.dto';
import { UpdateTask1Dto } from './dto/update-task1.dto';

@Injectable()
export class Task1Service {
  create(createTask1Dto: CreateTask1Dto) {
    return 'This action adds a new task1';
  }

  findAll() {
    return `This action returns all task1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task1`;
  }

  update(id: number, updateTask1Dto: UpdateTask1Dto) {
    return `This action updates a #${id} task1`;
  }

  remove(id: number) {
    return `This action removes a #${id} task1`;
  }
}
