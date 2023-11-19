import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://192.168.100.133:27018/db-nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
