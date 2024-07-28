import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { EntidadeController } from "./entidade.controller";
import { EntidadeService } from "./shared/entidade.service";
import { verifyAuth } from "src/middleware/verifyAuth";
import { MongooseModule } from "@nestjs/mongoose";
import { PreSchemaEntidade } from "./config/preSchema";

@Module({
  imports: [MongooseModule.forFeatureAsync([PreSchemaEntidade])],
  controllers: [EntidadeController],
  providers: [EntidadeService],
  exports: [EntidadeService],
})
//exemplo de middleware
export class EntidadeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyAuth).forRoutes("entidades");
  }
}
