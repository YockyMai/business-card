import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { ProfileModule } from './profile/profile.module';
import { SkillModule } from './skill/skill.module';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { ExperienceModule } from './experience/experience.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    DatabaseModule,
    GraphqlModule,
    ProfileModule,
    SkillModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CompanyModule,
    ExperienceModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
