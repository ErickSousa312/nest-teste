import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  UseGuards,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  HttpException,
} from '@nestjs/common';
import { Public } from './constants/constants';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './shared/auth.service';
// import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async sigIn(@Body() auth: AuthDto) {
    return await this.authService.signIn(auth);
  }
}
