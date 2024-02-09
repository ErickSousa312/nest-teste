import { ParecerSocialModule } from './modules/parecerSocial/parecerSocial.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import { FuncionarioModule } from './modules/funcionarios/funcionario.module';
import { EntidadeModule } from './modules/entidades/entidade.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { CustomConfigModule } from './config/config.module';
import { ProcessoModule } from './modules/processos/processo.module';

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
