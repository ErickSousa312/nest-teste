import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Processo } from '../entities/processo.entity';

export type ProcessoDocument = ProcessoSchema & Document;

@Schema({ collection: 'processo', timestamps: true })
export class ProcessoSchema implements Processo {
  @Prop({ default: '1/2024' })
  _id: string;

  @Prop({ ref: 'PacienteSchema' })
  IdPaciente: number;

  @Prop()
  DataViagem: Date;

  @Prop()
  DataAgendamento: Date;

  @Prop()
  PrevisaoRetorno: Date;

  @Prop()
  TipoAtendimento: number;

  @Prop()
  Especialidade: number;

  @Prop({ ref: 'FuncionarioSchema' })
  IdFuncionario: number;

  @Prop()
  IdMedico: number;

  @Prop()
  Entidade: number;

  @Prop()
  LocalOrigem: string;

  @Prop()
  LocalAtendimento: string;

  @Prop()
  Destino: string;

  @Prop()
  TipoDeslocamento: string;

  @Prop()
  EmpresaTransporte: string;

  @Prop({
    type: {
      ida: { type: Number, unique: false },
      volta: { type: Number, unique: false },
    },
    unique: false,
  })
  TotalPassagem: {
    ida: number;
    volta: number;
  };

  @Prop()
  IdentTrajeto: string;

  @Prop()
  ObsAtendimento: string;

  @Prop()
  ObsPassagemAerea: string;
}

export const ProcessoSchemaFactory =
  SchemaFactory.createForClass(ProcessoSchema);
