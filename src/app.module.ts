import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DatabaseModule } from './database/database.module.js';
import { GraphqlModule } from './graphql/graphql.module.js';
import { ProfileModule } from './profile/profile.module.js';
import { SkillModule } from './skill/skill.module.js';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module.js';
import { ExperienceModule } from './experience/experience.module.js';
import { ProjectModule } from './project/project.module.js';

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
