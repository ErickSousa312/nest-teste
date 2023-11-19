import { Body, Controller, Post, Get } from '@nestjs/common';


@Controller('V1')
export class AppController {

  @Get('teste1')
  async getHello(@Body() body: any) {
    console.log(body);
    // const { name, teamName } = body;
    return 'hello ';
  }
}
