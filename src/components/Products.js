import {useState} from 'react';
import styled, {useTheme} from 'styled-components/macro';

import {Container, Grid, Spinner, H1, Flex, Input} from 'components/styled';
import ProductItem from 'components/ProductItem';
import * as mq from 'styles/mediaQueries';
import {useDevices} from 'hooks/devices';
import dict from 'utils/dict';

const ProductGrid = styled(Grid)({
  [mq.medium]: {
    gridTemplateColumns: p => `repeat(${p['columns-m']}, 1fr);`,
  },
  [mq.small]: {
    gridTemplateColumns: p => `repeat(${p['columns-s']}, 1fr);`,
  },
});

function filterProducts(products, text) {
  const pattern = text
    .split('')
    .map(x => {
      return `(?=.*${x})`;
    })
    .join('');
  const regex = new RegExp(`${pattern}`, 'g');
  return products.filter(prod => {
    return (
      prod.brand.toLowerCase().match(regex) ||
      prod.model.toLowerCase().match(regex)
    );
  });
}

function Products() {
  const theme = useTheme();
  const {isLoading, data: products = []} = useDevices();
  const [filter, setFilter] = useState('');

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  const filteredProducts = filterProducts(products, filter);

  let view = null;
  if (isLoading) view = <Spinner size={24} />;
  else
    view = (
      <ProductGrid columns={4} gap={theme.space[4]} columns-s={1} columns-m={3}>
        {filteredProducts.map(prod => (
          <ProductItem key={prod.id} product={prod} />
        ))}
      </ProductGrid>
    );

  return (
    <Container css="justify-content: flex-start; min-width: 80%;">
      <Flex
        direction="column"
        css="width: 100%;"
        gap={theme.space[5]}
        alignItems="center"
      >
        <Flex
          css="width: 100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <H1 marginBottom={0} css="align-self: flex-start">
            {dict.productList}
          </H1>
          <Input
            placeholder={dict.search}
            type="text"
            onChange={handleFilter}
          />
        </Flex>
        {view}
      </Flex>
    </Container>
  );
}

export default Products;
