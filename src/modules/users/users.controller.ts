import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { UserService } from './shared/user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from 'src/modules/auth/auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  create(@Body() user: UserDto) {
    return this.userService.create(user);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllUser() {
    return this.userService.GetAllUser();
  }
}
