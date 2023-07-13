import { TaskStatus } from 'src/task/task.entity';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';
export class CreateTaskDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  description: string;
}

export class UpdateTaskDto {
  title: string;
  description: string;
  statuts: TaskStatus;
}
