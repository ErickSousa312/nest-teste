import { HttpException } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
  constructor(error: string) {
    super(
      {
        statusCode: HttpStatus.FORBIDDEN,
        error: "Forbidden",
      },
      HttpStatus.FORBIDDEN,
      {
        cause: error,
      },
    );
  }
}
