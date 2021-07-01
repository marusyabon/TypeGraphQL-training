import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "Author of a complete Track or a Module" })
export class Author {
  @Field(() => ID)
  id: string;
  
  @Field(() => String, { description: "Author's first and last name" })
  name: string;

  @Field(() => String, { 
    nullable: true,
    description: "Author's profile picture" })
  photo?: string;
}