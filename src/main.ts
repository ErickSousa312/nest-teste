import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { configSwagger } from "./config/swaggerConfig";
import { SwaggerModule } from "@nestjs/swagger";

async function Server() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup("api", app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.listen(3005);
}

Server().then((r) => console.log(r));
