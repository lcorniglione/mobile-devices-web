import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {FiShoppingCart} from 'react-icons/fi';
import {useQueryClient} from 'react-query';

import {Header, BadgeIcon, Breadcrumb} from 'components/styled';

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
      <Breadcrumb />

      <BadgeIcon
        iconCp={
          <FiShoppingCart css="width: 28px; height: 28px; color: white;" />
        }
        count={cartCount}
      />
    </Header>
  );
}

export default NavBar;
