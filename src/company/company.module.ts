import { Module } from '@nestjs/common';
import { CompanyService } from './company.service.js';
import { CompanyResolver } from './company.resolver.js';

@Module({
  providers: [CompanyResolver, CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
