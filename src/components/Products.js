import styled, {useTheme} from 'styled-components';

import {Container, Grid, Spinner} from 'components/styled';
import ProductItem from 'components/ProductItem';
import * as mq from 'styles/mediaQueries';
import {useDevices} from 'hooks/devices';

const ProductGrid = styled(Grid)({
  [mq.medium]: {
    gridTemplateColumns: p => `repeat(${p['columns-m']}, 1fr);`,
  },
  [mq.small]: {
    gridTemplateColumns: p => `repeat(${p['columns-s']}, 1fr);`,
  },
});

function Products() {
  const theme = useTheme();
  const {isLoading, data: products = []} = useDevices();

  let view = null;
  if (isLoading) view = <Spinner size={24} />;
  else
    view = (
      <ProductGrid columns={4} gap={theme.space[4]} columns-s={1} columns-m={3}>
        {products.map(prod => (
          <ProductItem key={prod.id} product={prod} />
        ))}
      </ProductGrid>
    );

  return <Container>{view}</Container>;
}

export default Products;
