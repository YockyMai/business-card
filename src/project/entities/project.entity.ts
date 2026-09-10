import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SkillLevel } from '../../generated/prisma/enums.js';

@ObjectType()
export class Project {
  @Field(() => Int, { description: 'Profile ID' })
  id: number;

  @Field(() => String, { description: 'Project title' })
  title: string;

  @Field(() => String, { description: 'Project description', nullable: true })
  description?: string;

  @Field(() => String, { description: 'Project URL', nullable: true })
  url: string;

  @Field(() => [String], {
    description: 'Project repository URL',
  })
  repoUrl?: string[];
}
