import express, { Router, Request, Response } from 'express';
import { createShopifyApiRest } from '../shopify';

const router: Router = express.Router();
const shopify = createShopifyApiRest();
const session = shopify.session.customAppSession("vinicius-dias-cosette-code-challange.myshopify.com");

router.get('/shop', async (req: Request, res: Response) => {
  try {
    const shop = await shopify.rest.Shop.all({ session });
    res.json(shop.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

export default router;
