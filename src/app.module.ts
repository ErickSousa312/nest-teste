import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { peopleRepository } from './repositories/people-repository';
import { PrismaPeople } from './repositories/prisma/prisma-people';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27018/db-nest'),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: peopleRepository,
      useClass: PrismaPeople,
    },
  ],
})
export class AppModule {}
