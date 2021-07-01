import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType({
  description:
    "A Module is a single unit of teaching. Multiple Modules compose a Track",
})
export class Module {
  @Field(() => ID)
  id: string;

  @Field(() => String, { description: "The module's title" })
  title: string;

  @Field(() => Int, {
    nullable: true,
    description: "The module's length in minutes",
  })
  length?: number;

  @Field(() => String, {
    nullable: true,
    description:
      "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript",
  })
  content: string;

  @Field(() => String, {
    nullable: true,
    description: "The module's video url, for video-based modules",
  })
  videoUrl: string;
}
