import service from './index';
import type { Collection } from '../models/collection';

const ENDPOINT = 'collections';

const collectionService = {
  getById: async (id: string): Promise<Collection> => {
    const response = await service.get<Collection>(`${ENDPOINT}/${id}`);
    return response.data
  }
}

export { collectionService };
