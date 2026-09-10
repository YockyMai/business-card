import { ObjectType, Field, GraphQLISODateTime, Int } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => String, { description: 'Experience title' })
  title: string;

  @Field(() => String, { description: 'Experience description' })
  description: string;

  @Field(() => GraphQLISODateTime, { description: 'Experience start date' })
  startDate: Date;

  @Field(() => GraphQLISODateTime, {
    description: 'Experience end date',
    nullable: true,
  })
  endDate?: Date;

  @Field(() => Boolean, { description: 'Current working at the experience' })
  current: boolean;

  @Field(() => Int, { description: 'Experience company ID' })
  companyId: number;

  @Field(() => Int, { description: 'Experience profile ID' })
  profileId: number;
}
