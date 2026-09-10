import { registerEnumType } from '@nestjs/graphql';
import { SkillLevel } from '../generated/prisma/client.js';

registerEnumType(SkillLevel, {
  name: 'SkillLevel',
  description: 'The available skill levels for a profile skill',
});
