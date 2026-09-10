import { Resolver } from '@nestjs/graphql';
import { CompanyService } from './company.service.js';

@Resolver()
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}
}
