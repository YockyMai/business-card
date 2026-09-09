import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [DatabaseModule, GraphqlModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
