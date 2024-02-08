import { Controller, UseGuards, Post, Body, Get } from '@nestjs/common';
import { PacienteService } from './shared/paciente.service';
import { AuthGuard } from '../auth/auth.guard';
import { PacienteDto } from './dto/Paciente.dto';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  create(@Body() paciente: PacienteDto): Promise<PacienteDto> {
    return this.pacienteService.create(paciente);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllPaciente() {
    return this.pacienteService.GetAllPaciente();
  }
}
