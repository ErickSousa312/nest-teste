/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Body, UseGuards, Get } from "@nestjs/common";
import { EntidadeService } from "./shared/entidade.service";
import { AuthGuard } from "../auth/auth.guard";
import { EntidadeDto } from "./dto/entidade.dto";

@Controller("entity")
export class EntidadeController {
  constructor(private readonly entidadeService: EntidadeService) {}

  @UseGuards(AuthGuard)
  @Post("create")
  create(@Body() entidade: EntidadeDto): Promise<EntidadeDto> {
    return this.entidadeService.create(entidade);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllEntidade() {
    return this.entidadeService.GetAllEntidade();
  }
}
