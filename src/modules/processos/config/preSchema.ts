import { getConnectionToken } from '@nestjs/mongoose';
import { ProcessoSchema } from '../schemas/processo.schema';
import { ProcessoSchemaFactory } from '../schemas/processo.schema';
import { Connection } from 'mongoose';

export const PreSchemaProcesso = {
  name: ProcessoSchema.name,
  useFactory: async (connection: Connection) => {
    const schema = ProcessoSchemaFactory;
    schema.pre('save', async function (next) {
      const lastEntity: any = await connection
        .collection('processo')
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
