import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { TrackResolver } from "./resolvers/track-resolver";
import { TrackAPI } from "./datasources/trackAPI";
import { resolve } from 'path'
import { ModuleResolver } from "./resolvers/module-resolver";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [TrackResolver, ModuleResolver],
    emitSchemaFile: resolve(__dirname, "../schema/schema.gql"),
  });

  const server = new ApolloServer({ schema, dataSources: () => ({ trackAPI: new TrackAPI() })});

  server.listen().then(() => {
    console.log(`🚀  Server is running on port 4000`);
  });
}

main();
