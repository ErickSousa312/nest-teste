import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
// import { UsersController } from './users.controller';
import { UserService } from './shared/user.service';
import { PreSchemaUser } from './configs/preSchema';

@Module({
  imports: [MongooseModule.forFeatureAsync([PreSchemaUser])],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
