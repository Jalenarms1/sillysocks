import { z } from "zod";
import {transporter} from '../../mailer';
import Taxjar from 'taxjar';

const taxjar = new Taxjar({
  apiKey: process.env.TAXJAR_API_TKN as string
});

import { router, publicProcedure } from "../trpc";

const newOrderZod = z.object({
  id: z.string(),
  total: z.number(),
  products: z.array(z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    image: z.string(),
    price: z.number().positive(),
    quantity: z.number().int().min(1),
    total: z.number().min(0),
  })),
  shippingAddress: z.string(),
  emailAddress: z.string(),
  customerName: z.string()
})

interface OrderInput {
  id: string;
  total: number;
  shippingAddress: string;
  emailAddress: string;
  customerName: string;
  orderItem: {
    createMany: {
      data: {
        productId: string;
        orderId: string;
      }[];
    };
  };
}

// interface newOrderZod {
//   id: string;
//   total: number;

// }

export const dbRouter = router({
  getProducts: publicProcedure
    .query(async ({ctx: {prisma} }) => {
        const products = await prisma.product.findMany();

        return products.filter((item:any) => item.quantity > 0)
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
  sendMail: publicProcedure
  .input(z.object({subject: z.string(), message: z.string(), emailAddress: z.string()}))
  .mutation(async ({input: {subject, message, emailAddress} }) => {
    const mailOptions = {
      from: 'dev.test.jalen@gmail.com',
      to: emailAddress,
      subject,
      text: message
    };

    await transporter.sendMail(mailOptions);

    return {msg: 'success'}
  }),
  submittedOrder: publicProcedure
  .input(newOrderZod)
  .mutation(async ({ctx: {prisma}, input: {id, total, products, shippingAddress, emailAddress, customerName} }) => {
    try {
      console.log(products);

      
      const order = await prisma.order.create({
        data: {
          id,
          total,
          shippingAddress,
          emailAddress,
          customerName,
        }
        
      });
      console.log(products);
      
      for (const product of products) {
        const createdOrderItem = await prisma.orderItem.create({
          data: {
            order: {
              connect: {id: order.id}
            },
            product: {
              connect: {id: product.id}
            },
            productQuantity: product.quantity
          },
        });

      }

      const updatedProducts = products.forEach(async (item:any) => {
        await prisma.product.update({
          where: { id: item.id },
          data: { quantity: { decrement: item.quantity } },
        });
      })

      console.log(updatedProducts);
      

    
      return order;
    } catch (error) {
      console.log(error);
      return error
      
    }
  }),
  getSalesTax: publicProcedure
    .input(z.object({zipCode: z.string()}))
    .query(async ({input: {zipCode}}) => {
      const salesTaxRate = await taxjar.ratesForLocation(zipCode);
      
      return salesTaxRate;
    })
});