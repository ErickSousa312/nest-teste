import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthService } from "./shared/auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/modules/core/users/users.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { verifyAuth } from "src/middleware/verifyAuth";
/*
https://docs.nestjs.com/modules
*/

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      global: true,
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>("SECRET"),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(verifyAuth).forRoutes("auth");
  }
}
