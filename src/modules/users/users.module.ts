import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
// import { UsersController } from './users.controller';
import { verifyAuth } from 'src/adapters/verifyAuth';
import { UserService } from './shared/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PreSchemaUser } from './configs/preSchema';
@Module({
  imports: [MongooseModule.forFeatureAsync([PreSchemaUser])],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyAuth).forRoutes('users');
  }
}
