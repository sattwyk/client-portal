import type { Config } from 'drizzle-kit';
import { env } from './env.mjs';

export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  connectionString: env.DATABASE_URL,
  breakpoints: true,
} satisfies Config;
