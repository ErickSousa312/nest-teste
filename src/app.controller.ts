import { Body, Controller, Post } from '@nestjs/common';
import { CreatePeople } from './dtos/create-people';
import { peopleRepository } from './repositories/people-repository';
//import { randomUUID } from 'node:crypto';

@Controller('V1')
export class AppController {
  constructor(private people: peopleRepository) {}

  @Post('teste')
  async getHello(@Body() body: CreatePeople) {
    const { name, teamName } = body;
    await this.people.create(name, teamName);
  }
}
