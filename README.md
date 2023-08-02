https://www.youtube.com/watch?v=DMplRZtfpBY&t=823s

$ npm i @nestjs/mongoose mongoose

app.module.tsJS

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}