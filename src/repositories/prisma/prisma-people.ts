import { PrismaService } from 'src/database/prisma.service';
import { peopleRepository } from '../people-repository';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaPeople implements peopleRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, teamName: string): Promise<void> {
    console.log(name, teamName);
    await this.prisma.peopleTeam.create({
      data: {
        id: randomUUID(),
        name,
        teamName: teamName,
      },
    });
  }
}
