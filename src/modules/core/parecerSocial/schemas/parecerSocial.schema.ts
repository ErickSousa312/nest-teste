import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ParecerSocial } from '../entities/parecerSocial.entity';

export type ParecerSocialDocument = ParecerSocial & Document;

@Schema({ collection: 'parecerSocial', timestamps: true })
export class ParecerSocialSchema implements ParecerSocial {
  @Prop({ default: 1 })
  _id: number;
  @Prop()
  IdPaciente: number;
  @Prop()
  IdProcesso: number;
  @Prop()
  Entidade: number;
  @Prop()
  TranscriParicaoMedico: string;
  @Prop()
  NumeroPortaria: string;
  @Prop()
  Justificativa: string;
}

export const ParecerSocialFactory =
  SchemaFactory.createForClass(ParecerSocialSchema);
