import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const dbRouter = router({
  getProducts: publicProcedure
    .query(async ({ctx: {prisma} }) => {
        const products = await prisma.product.findMany();

        return products
    }),
  getProduct: publicProcedure
    .input(z.object({id: z.string()}))
    .query(async ({ctx: {prisma}, input: {id} }) => {
      const product = await prisma.product.findUnique({
        where: {
            id
        }
      });

      return product
  }),
});