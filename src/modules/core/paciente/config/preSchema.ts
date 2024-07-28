import {
  PacienteSchema,
  PacienteSchemaFactory,
} from "../schemas/paciente.schema";
import { Connection } from "mongoose";
import { getConnectionToken } from "@nestjs/mongoose";

export const PreSchemaPaciente = {
  name: PacienteSchema.name,
  useFactory: async (connection: Connection) => {
    const schema = PacienteSchemaFactory;
    schema.pre("save", async function (next) {
      const lastEntity: any = await connection
        .collection("paciente")
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
