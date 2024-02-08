import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  PacienteSchema,
  PacienteSchemaFactory,
} from '../schemas/paciente.schema';
import { FindDocuments } from 'src/database/mongo';

export const PreSchemaPaciente = {
  name: PacienteSchema.name,
  imports: [ConfigModule],
  useFactory: async (config: ConfigService) => {
    const schema = PacienteSchemaFactory;
    schema.pre('save', async function (next) {
      const lastEntity: any = await FindDocuments('paciente', config);
      if (lastEntity && lastEntity._id) {
        this._id = lastEntity._id + 1;
      }
      next();
    });
    return schema;
  },
  inject: [ConfigService],
};
