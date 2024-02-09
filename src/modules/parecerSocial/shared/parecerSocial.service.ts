import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParecerSocial } from '../entities/parecerSocial.entity';
import {
  ParecerSocialSchema,
  ParecerSocialDocument,
} from '../schemas/parecerSocial.schema';

@Injectable()
export class ParecerSocialService {
  constructor(
    @InjectModel(ParecerSocialSchema.name)
    private readonly parecerSocialModel: Model<ParecerSocialDocument>,
  ) {}

  async create(parecerSocial: ParecerSocial): Promise<ParecerSocial> {
    return await this.parecerSocialModel.create(parecerSocial);
  }

  async GetAllPaciente(): Promise<ParecerSocial[]> {
    return await this.parecerSocialModel.find();
  }
}
