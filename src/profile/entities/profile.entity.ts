import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field(() => Int, { description: 'Profile ID' })
  id: number;

  @Field(() => String, { description: 'Profile name' })
  name: string;

  @Field(() => String, { description: 'Profile description' })
  description: string;

  @Field(() => [ProfileSkill], { description: 'Profile skills' })
  profileSkills: ProfileSkill[];

  @Field(() => [ProfileExperience], { description: 'Profile experiences' })
  profileExperiences: ProfileExperience[];

  @Field(() => [ProfileProject], { description: 'Profile projects' })
  profileProjects: ProfileProject[];
}
