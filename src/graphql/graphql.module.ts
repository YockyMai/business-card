import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault() as any],
      autoSchemaFile: join(process.cwd(), 'src/generated/graphql/schema.gql'),
      sortSchema: true,
    }),
  ],
})
export class GraphqlModule {}
