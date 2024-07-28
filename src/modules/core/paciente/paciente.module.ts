import { MongooseModule } from "@nestjs/mongoose";
import { PacienteController } from "./paciente.controller";
import { PacienteService } from "./shared/paciente.service";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PreSchemaPaciente } from "./config/preSchema";
import { verifyAuth } from "src/middleware/verifyAuth";

@Module({
  imports: [MongooseModule.forFeatureAsync([PreSchemaPaciente])],
  controllers: [PacienteController],
  providers: [PacienteService],
  exports: [PacienteService],
})
export class PacienteModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyAuth).forRoutes("pacientes");
  }
}
