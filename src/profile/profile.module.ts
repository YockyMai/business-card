import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service.js';
import { ProfileResolver } from './profile.resolver.js';
import { SkillModule } from '../skill/skill.module.js';
import { ExperienceModule } from '../experience/experience.module.js';
import { ProjectModule } from '../project/project.module.js';

@Module({
  imports: [SkillModule, ExperienceModule, ProjectModule],
  providers: [ProfileResolver, ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
