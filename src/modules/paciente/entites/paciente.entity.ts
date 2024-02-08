import { IsNotEmpty } from 'class-validator';

export class Paciente {
  //--------------------------------------------------------------------------------------------
  _id: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  DataNascimento: Date;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NumeroCPF: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NumeroRG: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  OrgaoEmissor: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NumeroCartaoSUS: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NumeroTituloEleitor: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  EleitorUF: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NomePaciente: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NomeSocial: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Sexo: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Idade: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Raca: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Cor: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Sangue: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  DataCadastro: Date;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NomePaiOuResponsavel: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  NomeMae: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  EstadoCivil: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Endereco: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Bairro: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Cidade: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  UF: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  CEP: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Referencia: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Celular: [
    {
      Numero: string;
    },
  ];
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Acompanhantes: [
    {
      NomeAcompanhante: string;
      NumeroCPF: string;
      NumeroRG: string;
      DataNascimento: Date;
    },
  ];
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Email: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  IdentZona: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  TratamentoSocial: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Ocupacao: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  GrauEstudo: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty()
  Conta: string;
  //--------------------------------------------------------------------------------------------
}
