import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Paciente } from '../entites/paciente.entity';

export type PacienteDocument = PacienteSchema & Document;

@Schema({ collection: 'paciente', timestamps: true })
export class PacienteSchema implements Paciente {
  @Prop({ default: 1 })
  _id: number;
  @Prop()
  DataNascimento: Date;
  @Prop()
  NumeroCPF: string;
  @Prop()
  NumeroRG: string;
  @Prop()
  OrgaoEmissor: string;
  @Prop()
  NumeroCartaoSUS: string;
  @Prop()
  NumeroTituloEleitor: string;
  @Prop()
  EleitorUF: string;
  @Prop()
  NomePaciente: string;
  @Prop()
  NomeSocial: string;
  @Prop()
  Sexo: string;
  @Prop()
  Idade: number;
  @Prop()
  Raca: string;
  @Prop()
  Cor: string;
  @Prop()
  Sangue: string;
  @Prop()
  DataCadastro: Date;
  @Prop()
  NomePaiOuResponsavel: string;
  @Prop()
  NomeMae: string;
  @Prop()
  EstadoCivil: string;
  @Prop()
  Endereco: string;
  @Prop()
  Bairro: string;
  @Prop()
  Cidade: string;
  @Prop()
  UF: string;
  @Prop()
  CEP: string;
  @Prop()
  Referencia: string;
  @Prop([
    {
      type: { name: { type: String } },
    },
  ])
  Celular: [
    {
      Numero: string;
    },
  ];
  @Prop([
    {
      type: {
        NomeAcompanhante: { type: String },
        NumeroCPF: { type: String, unique: false },
        NumeroRG: { type: String },
        DataNascimento: { type: Date },
      },
    },
  ])
  Acompanhantes: [
    {
      NomeAcompanhante: string;
      NumeroCPF: string;
      NumeroRG: string;
      DataNascimento: Date;
    },
  ];
  @Prop()
  Email: string;
  @Prop()
  IdentZona: string;
  @Prop()
  TratamentoSocial: string;
  @Prop()
  Ocupacao: string;
  @Prop()
  GrauEstudo: string;
  @Prop()
  Conta: string;
}

export const PacienteSchemaFactory =
  SchemaFactory.createForClass(PacienteSchema);
