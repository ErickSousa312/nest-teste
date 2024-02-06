/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entidade } from '../entites/entity.entity';
import { EntidadeDocument, EntidadeSchema } from '../schemas/entidade.schema';

@Injectable()
export class EntidadeService {
  constructor(
    @InjectModel(EntidadeSchema.name)
    private readonly entidadeModel: Model<EntidadeDocument>,
  ) {}

  async create(entidade: Entidade): Promise<Entidade> {
    return await this.entidadeModel.create(entidade);
  }

  async GetAllEntidade(): Promise<Entidade[]> {
    return await this.entidadeModel.find();
  }
}
