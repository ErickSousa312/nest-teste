import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { UserDocument, UserSchema } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema.name)
    private readonly userModel: Model<UserSchema>,
  ) {}

  async create(user: User): Promise<User> {
    const hashSenha = await bcrypt.hash(user.password, 10);
    const response = await this.userModel.create<UserDocument>({
      ...user,
      password: hashSenha,
    });
    return response;
  }

  async findLast(): Promise<User> {
    // eslint-disable-next-line prettier/prettier
    return await this.userModel.findOne({}, {}, { sort: { '_id': -1 } });
  }

  async findOne(userName: string): Promise<User> {
    return await this.userModel.findOne({ userName: userName });
  }

  async GetAllUser(): Promise<User[]> {
    return await this.userModel.find();
  }
}
