import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Skill } from '../../skill/entities/skill.entity';

@ObjectType()
export class Profile {
  @Field(() => Int, { description: 'Profile ID' })
  id: number;

  @Field(() => String, { description: 'Profile name' })
  name: string;

  @Field(() => String, { description: 'Profile description' })
  description: string;

  @Field(() => [Skill], { description: 'Profile skills' })
  skills: Skill[];

  // @Field(() => [ProfileExperience], { description: 'Profile experiences' })
  // profileExperiences: ProfileExperience[];

  // @Field(() => [ProfileProject], { description: 'Profile projects' })
  // profileProjects: ProfileProject[];
}
