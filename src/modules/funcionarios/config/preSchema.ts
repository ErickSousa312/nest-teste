import { ConfigModule, ConfigService } from '@nestjs/config';
import { FuncionarioSchema } from '../schemas/funcionario.schema';
import { FuncionarioSchemaFactory } from '../schemas/funcionario.schema';
import { FindDocuments } from 'src/database/mongo';

export const PreSchemaFuncionario = {
  name: FuncionarioSchema.name,
  imports: [ConfigModule],
  useFactory: async (config: ConfigService) => {
    const schema = FuncionarioSchemaFactory;
    schema.pre('save', async function (next) {
      const lastEntity: any = await FindDocuments('funcionario', config);
      if (lastEntity && lastEntity.id) {
        this._id = lastEntity.id + 1;
      }
      next();
    });
    return schema;
  },
  inject: [ConfigService],
};
