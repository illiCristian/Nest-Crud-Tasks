import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './task.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
@Controller('task')
export class TaskController {
  constructor(private taskService: TasksService) {}
  @Get()
  getAlltasks() {
    return this.taskService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }
  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    console.log(newTask);
    return this.taskService.create(newTask);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.taskService.update(id, updatedFields);
  }
}
