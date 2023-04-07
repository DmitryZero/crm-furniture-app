import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { productRouter } from "./routers/products";
import { categoryRouter } from "./routers/categories";
import { prisma } from "../db";
import { z } from "zod";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  products: productRouter,
  categories: categoryRouter,
  createCategory: categoryRouter.create,
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
  test: publicProcedure
    .query(() => {
    return prisma.category.findMany();
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
