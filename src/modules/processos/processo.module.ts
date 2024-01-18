import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProcessoController } from './processo.controller';
// import { UsersController } from './users.controller';
import { verifyAuth } from 'src/middleware/verifyAuth';
import { ProcessoService } from './shared/processo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PreSchemaProcesso } from './config/preSchema';
@Module({
  imports: [MongooseModule.forFeatureAsync([PreSchemaProcesso])],
  controllers: [ProcessoController],
  providers: [ProcessoService],
  exports: [ProcessoService],
})
export class ProcessoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyAuth).forRoutes('processos');
  }
}
