import { useEffect, useState } from 'react';
import { collectionService } from '../services/collection';
import type { Collection as TCollection } from '../models/collection';
import styled from "@emotion/styled";
import Loading from './Loading';
import ProductList from './ProductList';

const SNOW_BOARD_COLLECTION_ID: string = '452209738006';

const Collection: React.FC = () => {
  const [collection, setCollection] = useState<TCollection>()
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadCollection = async () => {
    try {
      setIsLoading(true);
      const collection = await collectionService.getById(SNOW_BOARD_COLLECTION_ID);
      setCollection(collection)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCollection()
  }, [])

  return (
    <Section>
      {isLoading ? (
        <Loading />
      ): (
        <>
          <CollectionName>{collection?.title}</CollectionName>
          <ProductList collectionId={collection?.id} />
        </>
      )}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 3rem;
  min-width: 1180px;
`;

const CollectionName = styled.span`
  font-size: 1.5rem;
`;

export default Collection;