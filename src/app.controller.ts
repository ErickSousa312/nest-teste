import { Body, Controller, Get } from '@nestjs/common';

@Controller('V1')
export class AppController {
  @Get('teste1')
  async getHello(@Body() body: any) {
    // const { name, teamName } = body;
    return 'hello ';
  }
}
