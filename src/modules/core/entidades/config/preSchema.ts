import { EntidadeSchema } from '../schemas/entidade.schema';
import { EntidadeSchemaFactory } from '../schemas/entidade.schema';
import { Connection } from 'mongoose';
import { getConnectionToken } from '@nestjs/mongoose';

export const PreSchemaEntidade = {
  name: EntidadeSchema.name,
  useFactory: async (connection: Connection) => {
    const schema = EntidadeSchemaFactory;
    schema.pre('save', async function (next) {
      const lastEntity: any = await connection
        .collection('entidade')
        .findOne({}, { sort: { _id: -1 } });
      if (lastEntity && lastEntity._id) {
        this._id = lastEntity._id + 1;
      }
      next();
    });
    return schema;
  },
  inject: [getConnectionToken()],
};
