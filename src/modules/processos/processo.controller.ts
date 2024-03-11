import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { ProcessoService } from './shared/processo.service';
import { AuthGuard } from '../auth/auth.guard';
import { ProcessoDto } from './dto/processo.dto';
import { Processo } from './entities/processo.entity';

@Controller('processos')
export class ProcessoController {
  constructor(private readonly processoService: ProcessoService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  create(@Body() processo: ProcessoDto) {
    return this.processoService.create(processo);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllProcesso() {
    return this.processoService.GetAllUser();
  }

  @UseGuards(AuthGuard)
  @Get('paciente/:id')
  async getAllProcessoByIdPaciente(
    @Param('id') id: number,
  ): Promise<Processo[]> {
    return await this.processoService.GetProcessByIdPaciente(id);
  }
}
