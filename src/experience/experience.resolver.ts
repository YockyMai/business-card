import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Company } from '../company/entities/company.entity.js';
import { CompanyService } from '../company/company.service.js';
import { Experience } from './entities/experience.entity.js';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private readonly companyService: CompanyService) {}

  @ResolveField(() => Company, { name: 'company' })
  async company(@Parent() experience: Experience) {
    return this.companyService.findOne(experience.companyId);
  }
}
