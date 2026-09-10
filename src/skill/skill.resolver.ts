import { Resolver } from '@nestjs/graphql';
import { SkillService } from './skill.service';

@Resolver()
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}
}
