import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProcessoSchema } from '../schemas/processo.schema';
import { ProcessoSchemaFactory } from '../schemas/processo.schema';
import { FindDocuments } from 'src/database/mongo';

export const PreSchemaProcesso = {
  name: ProcessoSchema.name,
  imports: [ConfigModule],
  useFactory: async (config: ConfigService) => {
    const schema = ProcessoSchemaFactory;
    schema.pre('save', async function (next) {
      const lastEntity: any = await FindDocuments('processo', config);
      if (lastEntity && lastEntity._id) {
        this._id = lastEntity._id + 1;
      }
      next();
    });
    return schema;
  },
  inject: [ConfigService],
};
