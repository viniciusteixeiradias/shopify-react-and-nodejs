import express, { Router, Request, Response } from 'express';
import { createShopifyApiRest } from '../shopify';

const shopify = createShopifyApiRest();
const session = shopify.session.customAppSession("vinicius-dias-cosette-code-challange.myshopify.com");
const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const limit = req.query.limit;
    const collection_id = req.query.collectionId;
    const products = await shopify.rest.Product.all({
      session,
      collection_id,
      limit
    });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

export default router;
