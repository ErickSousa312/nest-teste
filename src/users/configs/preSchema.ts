import { UserSchema } from '../schemas/user.schema';
import { UserSchemaFactory } from '../schemas/user.schema';
import { FindDocuments } from 'src/database/mongo';

export const PreSchemaUser = {
  name: UserSchema.name,
  useFactory: async () => {
    const schema = UserSchemaFactory;
    schema.pre('save', async function (next) {
      const lastEntity = await FindDocuments('user');
      console.log(lastEntity);
      next();
    });
    return schema;
  },
};
