import { FuncionarioController } from "./funcionario.controller";
import { FuncionarioService } from "./shared/funcionario.service";
import { verifyAuth } from "src/middleware/verifyAuth";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PreSchemaFuncionario } from "./config/preSchema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeatureAsync([PreSchemaFuncionario])],
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
  exports: [FuncionarioService],
})
export class FuncionarioModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyAuth).forRoutes("funcionarios");
  }
}
