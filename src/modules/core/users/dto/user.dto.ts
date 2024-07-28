import { User } from "../entities/user.entity";
import { OmitType } from "@nestjs/mapped-types";

export class CreateUserDto extends User {}

export class UserDto extends OmitType(User, ["password"] as const) {
  constructor(partial: Partial<UserDto>) {
    super();
    Object.assign(this, partial);
  }
}

export class UserDtoWithPasswordDto extends User {}
