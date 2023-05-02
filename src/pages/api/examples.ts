import type { NextApiRequest, NextApiResponse } from 'next';
import Taxjar from 'taxjar';

const taxjar = new Taxjar({
  apiKey: '213acdc07669e79a3a2b9e1c426eea84'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("hello hello");
  
  const { zipCode } = req.query;

  try {
    // Fetch the sales tax rate for the provided ZIP code
    const rate = await taxjar.ratesForLocation(zipCode as string);
    
    const salesTaxRate = rate

    res.status(200).json({ salesTaxRate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
}
