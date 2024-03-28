import { IsNotEmpty, Length } from 'class-validator';

export class User {
  _id: number;
  @IsNotEmpty({
    message: 'O campo nome não pode estar vazio',
  })
  @Length(5, 7, {
    message: 'O campo deve possuir pelo menos 5 caracteres',
  })
  userName: string;

  password: string;
}
