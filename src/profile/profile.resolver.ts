import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile } from './entities/profile.entity';
import { SkillService } from '../skill/skill.service';
import { Skill } from '../skill/entities/skill.entity';
import { Experience } from '../experience/entities/experience.entity';
import { Project } from '../project/entities/project.entity';
import { ExperienceService } from '../experience/experience.service';
import { ProjectService } from '../project/project.service';

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
