import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  HttpException,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { UserService } from "./shared/user.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto, UserDto } from "./dto/user.dto";
import { AuthGuard } from "src/modules/core/auth/auth.guard";
import { Public } from "../auth/constants/constants";
import { FindOneParams } from "src/validations/FindOneParams";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @UseGuards(AuthGuard)
  @Post("create")
  create(@Body() user: CreateUserDto): Promise<UserDto> {
    const userCreated = this.userService.create(user);
    return userCreated;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get(":id")
  findOne(@Param() params: FindOneParams): Promise<UserDto> {
    const { id } = params;
    const user = this.userService.findOneById(id);
    console.log(user);
    if (!user) {
      throw new HttpException(
        {
          message: "User Not Found",
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }

  @UseGuards(AuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllUser(): Promise<UserDto[]> {
    return this.userService.GetAllUser();
  }
}
