import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(private readonly db: DatabaseService) {}

  public async findAllByProfileId(profileId: number): Promise<Skill[]> {
    const profileSkills = await this.db.profileSkill.findMany({
      where: {
        profileId,
      },
      include: {
        skill: true,
      },
    });

    const normalizedSkills = profileSkills.map((profileSkill) => {
      return {
        id: profileSkill.skill.id,
        name: profileSkill.skill.name,
        level: profileSkill.level,
      };
    });

    return normalizedSkills;
  }
}
