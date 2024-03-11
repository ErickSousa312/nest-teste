import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paciente } from '../entites/paciente.entity';
import { PacienteDocument, PacienteSchema } from '../schemas/paciente.schema';

@Injectable()
export class PacienteService {
  constructor(
    @InjectModel(PacienteSchema.name)
    private readonly pacienteModel: Model<PacienteDocument>,
  ) {}

  async create(paciente: Paciente): Promise<Paciente> {
    return await this.pacienteModel.create(paciente);
  }

  async GetAllPaciente(): Promise<Paciente[]> {
    return await this.pacienteModel.find();
  }

  getOneById(id: number): Promise<Paciente> {
    return this.pacienteModel.findById(id);
  }
}
