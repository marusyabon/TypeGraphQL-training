import {
  Arg,
  Query,
  Resolver,
  Ctx,
  FieldResolver,
  Root,
  ID,
} from "type-graphql";
import { Author } from "../models/author.dto";
import { Track } from "../models/track.dto";
import { Module } from "../models/module.dto";
import { TrackAPI } from "../datasources/trackAPI";

interface Context {
  dataSources: {
    trackAPI: TrackAPI;
  };
}
@Resolver(() => Track)
export class TrackResolver {
  // returns an array of Tracks that will be used to populate the homepage grid of our web client
  @Query(() => [Track])
  async tracksForHome(@Ctx() { dataSources }: Context): Promise<Track[]> {
    return dataSources.trackAPI.getTracksForHome();
  }

  // get a single track by ID, for the track page
  @Query(() => Track)
  async track(
    @Arg("id", () => ID) trackId: string,
    @Ctx() { dataSources }: Context
  ): Promise<Track> {
    return dataSources.trackAPI.getTrack(trackId);
  }

  @FieldResolver(() => Author)
  async author(
    @Root() { authorId }: { authorId: string },
    @Ctx() { dataSources }: Context
  ): Promise<Author> {
    return dataSources.trackAPI.getAuthor(authorId);
  }

  @FieldResolver(() => [Module])
  async modules(
    @Root() { id }: { id: string },
    @Ctx() { dataSources }: Context
  ): Promise<Module[]> {
    return dataSources.trackAPI.getTrackModules(id);
  }
}
