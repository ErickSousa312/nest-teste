import { Body, Controller, Post } from '@nestjs/common';

import { peopleRepository } from './repositories/people-repository';
//import { randomUUID } from 'node:crypto';

@Controller('V1')
export class AppController {
  constructor(private people: peopleRepository) {}

  @Post('teste')
  async getHello(@Body() body: any) {
    console.log(body);
    // const { name, teamName } = body;
    return 'hello ';
  }
}
