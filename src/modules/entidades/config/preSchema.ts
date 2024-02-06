import { ConfigModule, ConfigService } from '@nestjs/config';
import { EntidadeSchema } from '../schemas/entidade.schema';
import { EntidadeSchemaFactory } from '../schemas/entidade.schema';
import { FindDocuments } from 'src/database/mongo';

export const PreSchemaEntidade = {
  name: EntidadeSchema.name,
  imports: [ConfigModule],
  useFactory: async (config: ConfigService) => {
    const schema = EntidadeSchemaFactory;
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
