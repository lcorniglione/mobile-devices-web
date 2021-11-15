import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {FiShoppingCart} from 'react-icons/fi';
import {useQueryClient} from 'react-query';

import {Link, Header, Flex, BadgeIcon} from 'components/styled';

function NavBar() {
  const queryClient = useQueryClient();
  const [cartCount, setCartCount] = useState();

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe(callback);

    function callback(mutation) {
      if (mutation.query.queryKey === 'cart-count' && mutation.action) {
        setCartCount(mutation.action.data);
      }
    }

    return unsubscribe;
  }, [queryClient]);

  return (
    <Header>
      <Flex
        css="min-width: 200px; height: 100%;"
        alignItems="center"
        justifyContent="space-around"
      >
        <BadgeIcon
          iconCp={
            <FiShoppingCart css="width: 28px; height: 28px; color: white;" />
          }
          count={cartCount}
        />

        <Link to="/products">Products</Link>
      </Flex>
    </Header>
  );
}

export default NavBar;
