import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/(utils)/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_dbwk8jup2lcL@ep-cold-bread-a1ej0k8a-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
