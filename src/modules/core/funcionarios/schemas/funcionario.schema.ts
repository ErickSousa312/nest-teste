import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Funcionario } from "../entities/funcionario.entity";

export type FuncionarioDocument = FuncionarioSchema & Document;

@Schema({ collection: "funcionario", timestamps: true })
export class FuncionarioSchema implements Funcionario {
  @Prop({ default: 1 })
  _id: number;
  @Prop()
  NomeFuncionario: string;
  @Prop()
  CPF: string;
  @Prop()
  Rg: number;
  @Prop()
  NumeroMatricula: number;
  @Prop()
  NumeroPortaria: number;
  @Prop()
  Cidade: string;
  @Prop()
  UfCidade: string;
  @Prop()
  CEP: string;
  @Prop([
    {
      type: { Numero: { type: String } },
    },
  ])
  Celular: [
    {
      Numero: string;
    },
  ];
  @Prop()
  AtividadeExercidade: string;
  @Prop()
  DataNascimento: Date;
  @Prop()
  CentroDeSaude: string;
  @Prop()
  DataCadastro: Date;
  @Prop()
  Observacao: string;
}

export const FuncionarioSchemaFactory =
  SchemaFactory.createForClass(FuncionarioSchema);
