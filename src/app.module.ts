import { ParecerSocialModule } from "./modules/core/parecerSocial/parecerSocial.module";
import { PacienteModule } from "./modules/core/paciente/paciente.module";
import { FuncionarioModule } from "./modules/core/funcionarios/funcionario.module";
import { EntidadeModule } from "./modules/core/entidades/entidade.module";
import { AuthModule } from "./modules/core/auth/auth.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./modules/core/users/users.module";
import { AuthGuard } from "./modules/core/auth/auth.guard";
import { APP_GUARD } from "@nestjs/core";
import { CustomConfigModule } from "./config/config.module";
import { ProcessoModule } from "./modules/core/processos/processo.module";

@Module({
  imports: [
    ParecerSocialModule,
    PacienteModule,
    FuncionarioModule,
    EntidadeModule,
    AuthModule,
    UsersModule,
    ProcessoModule,
    CustomConfigModule,
  ],
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
