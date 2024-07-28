import { Connection } from "mongoose";
import { getConnectionToken } from "@nestjs/mongoose";
import {
  ParecerSocialSchema,
  ParecerSocialFactory,
} from "../schemas/parecerSocial.schema";

export const PreSchemaParecerSocial = {
  name: ParecerSocialSchema.name,
  useFactory: async (connection: Connection) => {
    const schema = ParecerSocialFactory;
    schema.pre("save", async function (next) {
      const lastEntity: any = await connection
        .collection("parecerSocial")
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
