import { UserSchema } from "../schemas/user.schema";
import { UserSchemaFactory } from "../schemas/user.schema";
import { Connection } from "mongoose";
import { getConnectionToken } from "@nestjs/mongoose";

export const PreSchemaUser = {
  name: UserSchema.name,
  useFactory: async (connection: Connection) => {
    const schema = UserSchemaFactory;
    schema.pre("save", async function (next) {
      const lastEntity: any = await connection
        .collection("user")
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
