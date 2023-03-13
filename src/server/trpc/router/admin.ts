import { z } from "zod";

import { router, publicProcedure } from "../trpc";

const createProductInputSchema = z.object({
    name: z.string(),
    description: z.string(),
    quantity: z.number(),
    category: z.string(),
    price: z.number(),
    image: z.string()
});

export const adminRouter = router({
  addProduct: publicProcedure
    .input(createProductInputSchema)
    .mutation(async ({ input: data, ctx: {prisma} }) => {
        const product = await prisma.product.create({ data });

        return product
    }),
  
});
