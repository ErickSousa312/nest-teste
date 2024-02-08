import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { FuncionarioService } from './shared/funcionario.service';
import { AuthGuard } from '../auth/auth.guard';
import { FuncionarioDto } from './dto/funcionario.dto';

@Controller('funcionarios')
export class FuncionarioController {
  constructor(private readonly funcionarioservice: FuncionarioService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  create(@Body() funcionario: FuncionarioDto) {
    return this.funcionarioservice.create(funcionario);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllFuncionario() {
    return this.funcionarioservice.GetAllUser();
  }
}
