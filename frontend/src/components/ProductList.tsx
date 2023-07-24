import styled from '@emotion/styled';
import Loading from './Loading';
import Pagination from '@mui/material/Pagination';
import ProductComponent from './Product';
import { useEffect, useState } from 'react';
import { productService } from '../services/product';
import type { Product } from '../models/product';

interface Props {
  collectionId?: number;
}

const PAGE_SIZE = 10;

const ProductList: React.FC<Props> = ({ collectionId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const response = await productService.getAll({ collectionId, limit: 20 });
      setProducts([...response.data]);
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number): void => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const visibleProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ProductSection>
            {visibleProducts.map((product) => (
              <ProductComponent key={product.id} product={product} />
            ))}
          </ProductSection>
          <StyledPagination
            count={Math.ceil(products.length / PAGE_SIZE)}
            page={currentPage}
            color="primary"
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const StyledPagination = styled(Pagination)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 15px;

  & > ul > li > button {
    color: white;
  }
`;

export default ProductList;
