import { IsNotEmpty } from "class-validator";

export class AuthDto {
  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  password: string;
}
