import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class Funcionario {
  //--------------------------------------------------------------------------------------------
  _id: number;
  @IsNotEmpty({
    message: "O campo nomeFuncionario é obrigatório",
  })
  NomeFuncionario: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo CPF é obrigatório",
  })
  CPF: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo Rg é obrigatório",
  })
  Rg: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo NumeroMatricula é obrigatório",
  })
  NumeroMatricula: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo nomeFuncionario é obrigatório",
  })
  NumeroPortaria: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo Cidade é obrigatório",
  })
  Cidade: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo UfCidade é obrigatório",
  })
  @MaxLength(2, {
    message: "Estado deve ter no máximo 2 caracteres",
  })
  @MinLength(2, {
    message: "Estado deve ter no mínimo 2 caracteres",
  })
  UfCidade: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo nomeFuncionario é obrigatório",
  })
  CEP: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo Celular é obrigatório",
  })
  Celular: [
    {
      Numero: string;
    },
  ];
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo AtividadeExercidade é obrigatório",
  })
  AtividadeExercidade: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo DataNascimento é obrigatório",
  })
  DataNascimento: Date;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo CentroDeSaude é obrigatório",
  })
  CentroDeSaude: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo DataCadastro é obrigatório",
  })
  DataCadastro: Date;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: "O campo Observação é obrigatório",
  })
  Observacao: string;
  //--------------------------------------------------------------------------------------------
}
