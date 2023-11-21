import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserSchema } from '../schemas/user.schema';
import { UserSchemaFactory } from '../schemas/user.schema';
import { FindDocuments } from 'src/database/mongo';

export const PreSchemaUser = {
  name: UserSchema.name,
  imports: [ConfigModule],
  useFactory: async (config: ConfigService) => {
    const schema = UserSchemaFactory;
    schema.pre('save', async function (next) {
      const lastEntity: any = await FindDocuments('user', config);
      if (lastEntity && lastEntity._id) {
        this._id = lastEntity._id + 1;
      }
      next();
    });
    return schema;
  },
  inject: [ConfigService],
};
