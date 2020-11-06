import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import "reflect-metadata";
import "./utils/connect";

import VideoResolver from "./graphql/video/VideoResolver";
import CategoryResolver from "./graphql/category/CategoryResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResolver, CategoryResolver],
  });

  const server = new ApolloServer({ schema });
  const app = express();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => console.log("running"));
}

bootstrap();
