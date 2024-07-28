import { Controller, Get } from "@nestjs/common";

@Controller("V1")
export class AppController {
  @Get("teste1")
  async getHello() {
    // const { name, teamName } = body;
    return "Hello World!";
  }
}
