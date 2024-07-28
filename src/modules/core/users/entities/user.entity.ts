import { Expose } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";

export class User {
  @Expose()
  _id: number;
  @Expose()
  @IsNotEmpty({
    message: "O campo nome não pode estar vazio",
  })
  @Length(5, 70, {
    message: "O campo deve possuir pelo menos 5 caracteres",
  })
  userName: string;
  @IsNotEmpty()
  password: string;
}
