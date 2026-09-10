import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';

@Injectable()
export class CompanyService {
  constructor(private readonly db: DatabaseService) {}

  public async findOne(id: number) {
    const company = await this.db.company.findUnique({
      where: { id },
    });

    return company;
  }
}
