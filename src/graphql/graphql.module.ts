import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

import './graphql.enums.js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: false,
      introspection: true,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          embed: true,
        }) as any,
      ],
      autoSchemaFile: join(process.cwd(), 'src/generated/graphql/schema.gql'),
      sortSchema: true,
    }),
  ],
})
export class GraphqlModule {}
