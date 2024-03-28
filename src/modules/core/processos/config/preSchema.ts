import { getConnectionToken } from '@nestjs/mongoose';
import { ProcessoSchema } from '../schemas/processo.schema';
import { ProcessoSchemaFactory } from '../schemas/processo.schema';
import { Connection } from 'mongoose';

export const PreSchemaProcesso = {
  name: ProcessoSchema.name,
  useFactory: async (connection: Connection) => {
    const schema = ProcessoSchemaFactory;
    schema.pre('save', async function (next) {
      const now = new Date();
      const year = now.getFullYear();
      const lastEntity: any = await connection
        .collection('processo')
        .findOne({}, { sort: { createdAt: -1 } });
      let newCount: number = 1;
      if (lastEntity && lastEntity._id) {
        const [count, lastyear] = lastEntity._id.split('/');
        if (Number(lastyear) === year) {
          newCount = Number(count) + 1;
        }
        const paddedCount = String(newCount);
        this._id = `${paddedCount}/${year}`;
      }
      next();
    });
    return schema;
  },
  inject: [getConnectionToken()],
};
