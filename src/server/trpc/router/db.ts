import { z } from "zod";
import {transporter} from '../../mailer';


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
  send: publicProcedure
  .input(z.object({id: z.string()}))
  .mutation(async ({ctx: {prisma}, input: {id} }) => {
    const mailOptions = {
      from: 'dev.test.jalen@gmail.com',
      to: 'jalenarms@outlook.com',
      subject: 'Test',
      text: `${id} This is a test message`
    };

    await transporter.sendMail(mailOptions);

    return {msg: 'success'}
  }),
});