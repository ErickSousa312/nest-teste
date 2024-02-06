import { IsNotEmpty } from 'class-validator';

export class Entidade {
  _id: number;
  @IsNotEmpty({
    message: 'O campo Entidade é obrigatório',
  })
  NomeEntidade: string;
  @IsNotEmpty({
    message: 'O campo Cidade é obrigatório',
  })
  Cidade: string;
  @IsNotEmpty({
    message: 'O campo Estado é obrigatório',
  })
  Estado: string;
  @IsNotEmpty({
    message: 'O campo Especialidade é obrigatório',
  })
  Especialidade: [
    {
      Nome: string;
    },
  ];
}
