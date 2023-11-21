import { UserSchema } from '../schemas/user.schema';
import { UserSchemaFactory } from '../schemas/user.schema';
import { FindDocuments } from 'src/database/mongo';

export const PreSchemaUser = {
  name: UserSchema.name,
  useFactory: async () => {
    const schema = UserSchemaFactory;
    schema.pre('save', async function (next) {
      const lastEntity: any = await FindDocuments('user');
      if (lastEntity && lastEntity._id) {
        this._id = lastEntity._id + 1;
      }
      next();
    });
    return schema;
  },
};
