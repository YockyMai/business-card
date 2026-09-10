import { Module } from '@nestjs/common';
import { SkillService } from './skill.service.js';
import { SkillResolver } from './skill.resolver.js';

@Module({
  providers: [SkillResolver, SkillService],
  exports: [SkillService],
})
export class SkillModule {}
