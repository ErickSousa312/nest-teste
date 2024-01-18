import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ProcessoService } from './shared/processo.service';
import { AuthGuard } from '../auth/auth.guard';
import { ProcessoDto } from './dto/processo.dto';

@Controller('processos')
export class ProcessoController {
  constructor(private readonly processoService: ProcessoService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  create(@Body() processo: ProcessoDto) {
    return this.processoService.create(processo);
  }
}
