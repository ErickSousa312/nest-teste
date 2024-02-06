/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Processo } from '../entities/processo.entity';
import { ProcessoDocument, ProcessoSchema } from '../schemas/processo.schema';

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
}
