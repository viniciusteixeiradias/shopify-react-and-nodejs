import service from './index';
import type { Product } from '../models/product';
import { AxiosResponse } from 'axios';

interface Filters {
  limit: number;
  collectionId: number;
}

const ENDPOINT = 'products';

const productService = {
  getAll: async (filters: Partial<Filters> = { limit: 10 }): Promise<{ data: Product[] }> => {
    const response = await service.get<AxiosResponse<Product[]>>(ENDPOINT, {
      params: filters
    });
    return response.data
  },
  
  getCount: async (): Promise<{count: number}> => {
    const response = await service.get<{count: number}>(`${ENDPOINT}/count`);
    return response.data
  }
}

export { productService };
