import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { Profile } from './entities/profile.entity.js';
import { SkillService } from '../skill/skill.service.js';
import { Skill } from '../skill/entities/skill.entity.js';
import { Experience } from '../experience/entities/experience.entity.js';
import { Project } from '../project/entities/project.entity.js';
import { ExperienceService } from '../experience/experience.service.js';
import { ProjectService } from '../project/project.service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillService: SkillService,
    private readonly experienceService: ExperienceService,
    private readonly projectService: ProjectService,
  ) {}

  @Query(() => Profile, { name: 'profile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.profileService.findOne(id);
  }

  @ResolveField(() => [Skill], { name: 'skills' })
  skills(@Parent() profile: Profile) {
    return this.skillService.findAllByProfileId(profile.id);
  }

  @ResolveField(() => [Experience], { name: 'experiences' })
  experiences(@Parent() profile: Profile) {
    return this.experienceService.findAllByProfileId(profile.id);
  }

  @ResolveField(() => [Project], { name: 'projects' })
  projects(@Parent() profile: Profile) {
    return this.projectService.findAllByProfileId(profile.id);
  }
}
