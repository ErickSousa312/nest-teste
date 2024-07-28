import {
  ClassConstructor,
  ClassTransformOptions,
  plainToClass,
} from "class-transformer";
import { UserDto } from "src/modules/core/users/dto/user.dto";

function getDTOClass(type: "userDTO" | "admin"): ClassConstructor<any> {
  switch (type) {
    case "userDTO":
      return UserDto;
    case "admin":
    default:
      return UserDto;
  }
}

export function ClassToDTO<T>(
  type: "userDTO" | "admin",
  obj: object,
  options?: ClassTransformOptions,
): T {
  const dtoClass = getDTOClass(type);
  const dataConverted = plainToClass(dtoClass, obj, options);
  return dataConverted as T;
}
