import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field(() => Int, { description: 'Profile ID' })
  id: number;

  @Field(() => String, { description: 'Profile name' })
  name: string;

  @Field(() => String, { description: 'Profile description' })
  description: string;
}
