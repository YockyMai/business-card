import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service.js';

@Injectable()
export class ProjectService {
  constructor(private readonly db: DatabaseService) {}

  public async findAllByProfileId(profileId: number) {
    const projects = await this.db.profileProject.findMany({
      where: {
        profileId,
      },
    });

    return projects;
  }
}
