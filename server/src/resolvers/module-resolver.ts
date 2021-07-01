import { Arg, Query, Resolver, Ctx, ID } from "type-graphql";
import { Module } from "../models/module.dto";
import { TrackAPI } from "../datasources/trackAPI";

interface Context {
  dataSources: {
    trackAPI: TrackAPI;
  };
}

@Resolver(() => Module)
export class ModuleResolver {
  // returns a Module and parent Track
  @Query(() => Module)
  async module(
    @Arg("id", () => ID) moduleId: string,
    @Ctx() { dataSources }: Context
  ): Promise<Module> {
    return dataSources.trackAPI.getModule(moduleId);
  }
}
