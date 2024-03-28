import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../entities/user.entity';

export type UserDocument = UserSchema & Document;

@Schema({ collection: 'user', timestamps: true })
export class UserSchema implements User {
  @Prop({ default: 1 })
  _id: number;

  @Prop()
  userName: string;

  @Prop()
  password: string;
}

export const UserSchemaFactory = SchemaFactory.createForClass(UserSchema);
