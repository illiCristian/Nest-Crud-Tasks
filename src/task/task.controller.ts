import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO, UpdateTaskDto } from 'src/dto/task.dto';
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  getAlltasks() {
    return this.taskService.getAlltasks();
  }
  @Post()
  createTask(@Body() newTask: CreateTaskDTO) {
    console.log(newTask);
    return this.taskService.createTask(newTask.title, newTask.description);
  }
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
  }
  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.taskService.updateTask(id, updatedFields);
  }
}
