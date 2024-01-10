/*
https://docs.nestjs.com/modules
*/
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PreSchemaUser } from './preSchema';

@Module({
  imports: [MongooseModule.forFeatureAsync([PreSchemaUser])],
})
export class PreSchemaModule {}
