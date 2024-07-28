import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Query,
} from "@nestjs/common";
import { ProcessoService } from "./shared/processo.service";
import { AuthGuard } from "../auth/auth.guard";
import { ProcessoDto } from "./dto/processo.dto";
import { Processo } from "./entities/processo.entity";
import { FindOneParams } from "src/validations/FindOneParams";

@Controller("process")
export class ProcessoController {
  constructor(private readonly processoService: ProcessoService) {}

  @UseGuards(AuthGuard)
  @Post("create")
  create(@Body() processo: ProcessoDto) {
    return this.processoService.create(processo);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllProcesso(@Query() { populate }: { populate: string }) {
    if (populate === "true") {
      return this.processoService.GetProcessPopulate();
    }
    return this.processoService.GetAllUser();
  }

  @UseGuards(AuthGuard)
  @Get("patient/:id")
  async getAllProcessoByIdPaciente(
    @Param("id") id: number,
  ): Promise<Processo[]> {
    return await this.processoService.GetProcessByIdPaciente(id);
  }

  @UseGuards(AuthGuard)
  @Get(":id")
  async getAllProcessoById(@Param() params: FindOneParams): Promise<Processo> {
    const { id } = params;
    return await this.processoService.GetProcessById(id);
  }
}
