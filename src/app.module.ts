import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { CustomConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UsersModule, CustomConfigModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
