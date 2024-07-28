import { DocumentBuilder } from "@nestjs/swagger";

export const configSwagger = new DocumentBuilder()
  .setTitle("Documentação com Swagger - Fábrica de Sinapse")
  .setDescription(
    "O Swagger (aka OpenApi) é uma biblioteca muito conhecida no universo backend, estando disponível para diversas linguagens e frameworks. Ela gera um site interno no seu backend que descreve, com muitos detalhes, cada endpoint e estrutura de entidades presentes na sua aplicação.",
  )
  .setVersion("1.0")
  .addTag("users")
  .build();
