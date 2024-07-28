import { FuncionarioSchema } from "../schemas/funcionario.schema";
import { FuncionarioSchemaFactory } from "../schemas/funcionario.schema";
import { Connection } from "mongoose";
import { getConnectionToken } from "@nestjs/mongoose";

export const PreSchemaFuncionario = {
  name: FuncionarioSchema.name,
  useFactory: async (connection: Connection) => {
    const schema = FuncionarioSchemaFactory;
    schema.pre("save", async function (next) {
      const lastEntity: any = await connection
        .collection("funcionario")
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
