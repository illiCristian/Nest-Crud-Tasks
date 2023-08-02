import { PartialType } from '@nestjs/mapped-types';
import { CreateTask1Dto } from './create-task1.dto';

export class UpdateTask1Dto extends PartialType(CreateTask1Dto) {}
