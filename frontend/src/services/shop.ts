import service from './index';
import type { Shop } from '../models/shop';

const ENDPOINT = 'shop';

const shopService = {
  get: async (): Promise<Shop> => {
    const shops = await service.get<Shop[]>(ENDPOINT);
    return shops.data[0]
  }
}

export { shopService };
