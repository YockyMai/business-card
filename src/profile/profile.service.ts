import { HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';
import { GraphQLException } from '../common/exceptions/graphql.exception.js';

@Injectable()
export class ProfileService {
  constructor(private readonly db: DatabaseService) {}

  public async findOne(id?: number) {
    const profile = await this.db.profile.findUnique({
      where: {
        id,
      },
    });

    if (!profile) {
      throw new GraphQLException('Profile not found', HttpStatus.NOT_FOUND);
    }

    return profile;
  }
}
