import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { UserDocument, UserSchema } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema.name)
    private readonly userModel: Model<UserSchema>,
  ) {}

  async create(user: User): Promise<User> {
    const response = await this.userModel.create<UserDocument>(user);
    response.save();
    return response;
  }

  async findLast(): Promise<User> {
    // eslint-disable-next-line prettier/prettier
    return await this.userModel.findOne({}, {}, { sort: { '_id': -1 } });
  }
}
