import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.category.findFirst({
        where: {
          categoryId: input.id
        }
      })
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
  create: publicProcedure
  .input(
    z.object({
      categoryId: z.number(),
      elmaId: z.string().length(36),
      categoryName: z.string(),
      parentCategoryId: z.number().optional()      
    })
  )
  .mutation(async ({ctx, input}) => {
    
  })
});
