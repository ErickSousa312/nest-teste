import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { ProcessoService } from './shared/processo.service';
import { AuthGuard } from '../auth/auth.guard';
import { ProcessoDto } from './dto/processo.dto';
import { Processo } from './entities/processo.entity';

@Controller('processos')
export class ProcessoController {
  constructor(private readonly processoService: ProcessoService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() processo: ProcessoDto) {
    return this.processoService.create(processo);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllProcesso(@Query() { populate }: { populate: string }) {
    if (populate === 'true') {
      return this.processoService.GetProcessPopulate();
    }
    return this.processoService.GetAllUser();
  }

  @UseGuards(AuthGuard)
  @Get('paciente/:id')
  async getAllProcessoByIdPaciente(
    @Param('id') id: number,
  ): Promise<Processo[]> {
    return await this.processoService.GetProcessByIdPaciente(id);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getAllProcessoById(@Param('id') id: number): Promise<Processo> {
    return await this.processoService.GetProcessById(id);
  }
}
