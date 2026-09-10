import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => Int, { description: 'Profile ID' })
  id: number;

  @Field(() => String, { description: 'Skill name' })
  name: string;

  // @Field(() => SkillLevel, { description: 'Skill level' })
  // level: SkillLevel;
}
