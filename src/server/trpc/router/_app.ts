import { router } from "../trpc";
import { adminRouter } from "./admin";
import { authRouter } from "./auth";
import { dbRouter } from "./db";

export const appRouter = router({
  adminRouter: adminRouter,
  dbRouter: dbRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
