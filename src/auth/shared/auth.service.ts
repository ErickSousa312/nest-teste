import { HttpStatus, HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/shared/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(user: AuthDto) {
    const data = await this.userService.findOne(user.userName);
    if (!data) {
      throw new HttpException(
        {
          message: 'User Not Found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const compare = await bcrypt.compare(user.password, data.password);
    if (!compare) {
      throw new HttpException(
        {
          message: 'No match password',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    const payload = { userName: user.userName };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
