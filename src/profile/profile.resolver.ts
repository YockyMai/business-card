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

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profileService: ProfileService,
    private readonly skillService: SkillService,
  ) {}

  @Query(() => Profile, { name: 'profile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.profileService.findOne(id);
  }

  @ResolveField(() => [Skill], { name: 'skills' })
  skills(@Parent() profile: Profile) {
    return this.skillService.findAllByProfileId(profile.id);
  }
}
