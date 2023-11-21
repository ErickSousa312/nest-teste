import { Module } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/modules/users/users.module';
import { jwtConstants } from './constants/constants';
/*
https://docs.nestjs.com/modules
*/

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '66666666666s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
