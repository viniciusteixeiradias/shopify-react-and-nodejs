import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Shop } from '../models/shop';
import { shopService } from '../services/shop';
import Loading from './Loading';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [shop, setShop] = useState<Shop>()
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadShopInfo = async () => {
    try {
      setIsLoading(true)
      
      const shop = await shopService.get()

      setShop({
        ...shop,
        name: shop.name.split('-').join(' ')
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadShopInfo()
  }, [])

  return (
    <AppLayout>
      {isLoading 
        ? <Loading />
        : <>
          <header>
            <AppBar>
              <AppName href="/">
                {shop?.name}
              </AppName>
            </AppBar>
          </header>

          <AppMain>{children}</AppMain>
        </>
      }
      
    </AppLayout>
  );
}

const AppLayout = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #101418;
  color: #dedbd7;
  overflow-x: hidden;
`;

const AppBar = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 1rem;
  height: 60px;
  font-size: 1.5rem;
  border-style: solid;
  border-color: rgb(51, 55, 57);
  border-width: 0px 0px thin;
  background-color: rgba(16, 20, 24, 0.8);
`;

const AppName = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  color: white;
`;

const AppMain = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export default Layout;