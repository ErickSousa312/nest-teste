import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Entidade } from '../entites/entity.entity';

export type EntidadeDocument = EntidadeSchema & Document;

@Schema({ collection: 'entidade', timestamps: true })
export class EntidadeSchema implements Entidade {
  @Prop({ default: 1 })
  _id: number;
  @Prop()
  NomeEntidade: string;
  @Prop()
  Cidade: string;
  @Prop()
  Estado: string;
  @Prop({
    type: { Nome: String },
  })
  Especialidade: [{ Nome: string }];
}

export const EntidadeSchemaFactory =
  SchemaFactory.createForClass(EntidadeSchema);
