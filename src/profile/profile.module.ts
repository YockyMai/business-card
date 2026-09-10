import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { SkillModule } from '../skill/skill.module';

@Module({
  imports: [SkillModule],
  providers: [ProfileResolver, ProfileService],
})
export class ProfileModule {}
