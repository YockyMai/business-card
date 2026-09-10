import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service.js';
import { ExperienceResolver } from './experience.resolver.js';
import { CompanyModule } from '../company/company.module.js';

@Module({
  imports: [CompanyModule],
  providers: [ExperienceResolver, ExperienceService],
  exports: [ExperienceService],
})
export class ExperienceModule {}
