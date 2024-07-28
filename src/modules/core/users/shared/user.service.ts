import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../entities/user.entity";
import { UserDocument, UserSchema } from "../schemas/user.schema";
import * as bcrypt from "bcrypt";
import { UserDto, UserDtoWithPasswordDto } from "../dto/user.dto";
import { ClassToDTO } from "src/utils/converterClass/ClassToDTO";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema.name)
    private readonly userModel: Model<UserSchema>,
  ) {}

  async create(user: User): Promise<UserDto> {
    const hashPassword = await bcrypt.hash(user.password, 10);
    const createdUser: User = await this.userModel.create<UserDocument>({
      ...user,
      password: hashPassword,
    });
    return ClassToDTO("userDTO", createdUser, {
      excludeExtraneousValues: true,
    });
  }

  async findLast(): Promise<User> {
    return await this.userModel.findOne({}, {}, { sort: { _id: -1 } });
  }

  async findOneName(userName: string): Promise<UserDtoWithPasswordDto> {
    return await this.userModel.findOne({ userName: userName });
  }

  async findOneById(id: number): Promise<UserDto> {
    const findUser = await this.userModel.findOne({ _id: id });
    return ClassToDTO("userDTO", findUser, { excludeExtraneousValues: true });
  }

  async GetAllUser(): Promise<UserDto[]> {
    const userList = await this.userModel.find();
    return userList.map((user: object) =>
      ClassToDTO("userDTO", user, { excludeExtraneousValues: true }),
    );
  }
}
