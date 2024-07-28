/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  FuncionarioDocument,
  FuncionarioSchema,
} from "../schemas/funcionario.schema";
import { Model } from "mongoose";
import { Funcionario } from "../entities/funcionario.entity";

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectModel(FuncionarioSchema.name)
    private readonly funcionarioModel: Model<FuncionarioDocument>,
  ) {}

  async create(funcionario: Funcionario): Promise<Funcionario> {
    return await this.funcionarioModel.create(funcionario);
  }

  async GetAllFuncionario(): Promise<Funcionario[]> {
    return await this.funcionarioModel.find();
  }
}
