import { Controller, UseGuards, Post, Body, Get, Param } from "@nestjs/common";
import { PacienteService } from "./shared/paciente.service";
import { AuthGuard } from "../auth/auth.guard";
import { PacienteDto } from "./dto/Paciente.dto";
import { ForbiddenException } from "src/utils/httpException/forbidden.exception";

@Controller("patient")
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @UseGuards(AuthGuard)
  @Post("create")
  create(@Body() paciente: PacienteDto): Promise<PacienteDto> {
    return this.pacienteService.create(paciente);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllPaciente(): Promise<PacienteDto[]> {
    return this.pacienteService.GetAllPaciente();
  }

  @UseGuards(AuthGuard)
  @Get(":id")
  async getPaciente(@Param("id") id: number): Promise<PacienteDto> {
    try {
      return await this.pacienteService.getOneById(id);
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
