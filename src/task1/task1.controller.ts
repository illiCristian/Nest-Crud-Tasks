import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Task1Service } from './task1.service';
import { CreateTask1Dto } from './dto/create-task1.dto';
import { UpdateTask1Dto } from './dto/update-task1.dto';

@Controller('task1')
export class Task1Controller {
  constructor(private readonly task1Service: Task1Service) {}

  @Post()
  create(@Body() createTask1Dto: CreateTask1Dto) {
    return this.task1Service.create(createTask1Dto);
  }

  @Get()
  findAll() {
    return this.task1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.task1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTask1Dto: UpdateTask1Dto) {
    return this.task1Service.update(+id, updateTask1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.task1Service.remove(+id);
  }
}
