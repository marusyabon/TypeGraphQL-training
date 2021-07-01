import { Field, ID, ObjectType, Int } from "type-graphql";
import { Author } from "./author.dto";
import { Module } from "./module.dto";

@ObjectType({
  description:
    "A track is a group of Modules that teaches about a specific topic",
})
export class Track {
  @Field(() => ID)
  id: string;

  @Field(() => String, { description: "The track's title" })
  title: string;

  @Field(() => Author)
  author: Author;

  @Field(() => String, {
    nullable: true,
    description:
      "The track's illustration to display in track card or track page detail",
  })
  thumbnail?: string;

  @Field(() => Int, {
    nullable: true,
    description: "The track's approximate length to complete, in minutes",
  })
  length?: number;

  @Field(() => Int, {
    nullable: true,
    description: "The number of modules this track contains",
  })
  modulesCount?: number;

  @Field(() => String, {
    description: "The track's complete description, can be in markdown format",
  })
  description?: string;

  @Field(() => Int, {
    nullable: true,
    description: "The number of times a track has been viewed",
  })
  numberOfViews?: number;

  @Field(() => [Module])
  modules: Module[];
}
