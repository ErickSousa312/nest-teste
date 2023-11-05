import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { peopleRepository } from './repositories/people-repository';
import { PrismaPeople } from './repositories/prisma/prisma-people';

@Module({
  imports: [],
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
