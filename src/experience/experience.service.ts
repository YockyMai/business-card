import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ExperienceService {
  constructor(private readonly db: DatabaseService) {}

  public async findAllByProfileId(profileId: number) {
    const profiles = await this.db.profileExperience.findMany({
      where: {
        profileId,
      },
      include: {
        company: true,
      },
    });

    return profiles;
  }
}
