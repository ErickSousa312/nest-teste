import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Processo } from "../entities/processo.entity";
import { ProcessoDocument, ProcessoSchema } from "../schemas/processo.schema";

@Injectable()
export class ProcessoService {
  constructor(
    @InjectModel(ProcessoSchema.name)
    private readonly processoModel: Model<ProcessoDocument>,
  ) {}

  async create(processo: Processo): Promise<Processo> {
    return await this.processoModel.create(processo);
  }

  async GetAllUser(): Promise<Processo[]> {
    return await this.processoModel.find();
  }

  GetProcessByIdPaciente(id: number): Promise<Processo[]> {
    return this.processoModel.find({ IdPaciente: id });
  }

  GetProcessById(id: number): Promise<Processo> {
    return this.processoModel.findById(id);
  }

  GetProcessPopulate(): Promise<Processo[]> {
    return this.processoModel
      .find()
      .populate("IdPaciente")
      .populate("IdFuncionario")
      .populate("IdMedico");
  }
}
