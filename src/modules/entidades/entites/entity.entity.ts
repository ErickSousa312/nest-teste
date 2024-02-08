import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class Entidade {
  //--------------------------------------------------------------------------------------------
  _id: number;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: 'O campo Entidade é obrigatório',
  })
  NomeEntidade: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: 'O campo Cidade é obrigatório',
  })
  Cidade: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: 'O campo Estado é obrigatório',
  })
  @MaxLength(2, {
    message: 'Estado deve ter no máximo 2 caracteres',
  })
  @MinLength(2, {
    message: 'Estado deve ter no mínimo 2 caracteres',
  })
  Estado: string;
  //--------------------------------------------------------------------------------------------
  @IsNotEmpty({
    message: 'O campo Especialidades é obrigatório',
  })
  Especialidades: [
    {
      Nome: string;
    },
  ];
  //--------------------------------------------------------------------------------------------
}
