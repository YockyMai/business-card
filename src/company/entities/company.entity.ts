import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => Int, { description: 'Company ID' })
  id: number;

  @Field(() => String, { description: 'Company name' })
  name: string;

  @Field(() => String, { description: 'Company description' })
  description: string;
}
