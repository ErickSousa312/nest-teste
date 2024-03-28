import { MongooseModule } from '@nestjs/mongoose';
import { ParecerSocialController } from './parecerSocial.controller';
import { PreSchemaParecerSocial } from './config/preSchema';

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ParecerSocialService } from './shared/parecerSocial.service';
import { verifyAuth } from 'src/middleware/verifyAuth';

@Module({
  imports: [MongooseModule.forFeatureAsync([PreSchemaParecerSocial])],
  controllers: [ParecerSocialController],
  providers: [ParecerSocialService],
  exports: [ParecerSocialService],
})
export class ParecerSocialModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyAuth).forRoutes('parecerSocial');
  }
}
