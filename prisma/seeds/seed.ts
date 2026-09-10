import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../src/generated/prisma/client.js';
import addInitData from './202609100342-add-init-data.js';
import 'dotenv/config';

console.log(process.env.DATABASE_URL);
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const seeds = [addInitData];

async function main() {
  for (const seed of seeds) {
    await prisma.$transaction(async (tx) => {
      await seed(tx as PrismaClient);
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
