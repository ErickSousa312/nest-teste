import { HttpStatus, HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/users/shared/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { Typetoken } from '../dto/@typeToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(user: AuthDto): Promise<Typetoken> {
    const data = await this.userService.findOne(user.userName);
    data;
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
