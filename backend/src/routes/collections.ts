import express, { Router, Request, Response } from 'express';
import { createShopifyApiRest } from '../shopify';

const router: Router = express.Router();
const shopify = createShopifyApiRest();
const session = shopify.session.customAppSession("vinicius-dias-cosette-code-challange.myshopify.com");

router.get('/collections/:id', async (req: Request, res: Response) => {
  try {
    const collectionId = req.params.id;
    const collection = await shopify.rest.Collection.find({ session, id: collectionId });
    res.json(collection);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

export default router;
