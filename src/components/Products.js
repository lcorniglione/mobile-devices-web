import styled, {useTheme} from 'styled-components';

import {Container, Grid} from 'components/styled';
import ProductItem from 'components/ProductItem';
import * as mq from 'styles/mediaQueries';

const products = [
  {
    id: 'ZmGrkLRPXOTpxsU4jjAcv',
    brand: 'Acer',
    model: 'Iconia Talk S',
    price: '170',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
  },
  {
    id: 'cGjFJlmqNPIwU59AOcY8H',
    brand: 'Acer',
    model: 'Liquid Z6 Plus',
    price: '250',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg',
  },
  {
    id: '8hKbH2UHPM_944nRHYN1n',
    brand: 'Acer',
    model: 'Liquid Z6',
    price: '120',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg',
  },
  {
    id: 'xyPoqGJxYR4Nn3yVGQcfI',
    brand: 'Acer',
    model: 'Iconia Tab 10 A3-A40',
    price: '230',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg',
  },
  {
    id: 'ND1elEt4nqZrCeFflDUZ2',
    brand: 'Acer',
    model: 'Liquid X2',
    price: '230',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ND1elEt4nqZrCeFflDUZ2.jpg',
  },
  {
    id: 'pMZMhe_ZaAPZoaCCtlDrg',
    brand: 'Acer',
    model: 'Liquid Jade 2',
    price: '',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg',
  },
  {
    id: 'ke-gsQbO8qH9PQ-zcdiAJ',
    brand: 'Acer',
    model: 'Liquid Zest Plus',
    price: '200',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ke-gsQbO8qH9PQ-zcdiAJ.jpg',
  },
  {
    id: 'meQvyTcXACAwWn3wCKSw6',
    brand: 'Acer',
    model: 'Liquid Zest',
    price: '110',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/meQvyTcXACAwWn3wCKSw6.jpg',
  },
  {
    id: 'qSyO-2wbNUssUhBb2waew',
    brand: 'Acer',
    model: 'Predator 8',
    price: '350',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/qSyO-2wbNUssUhBb2waew.jpg',
  },
  {
    id: 'P2oqviM96_ozwsgZkj9Xf',
    brand: 'Acer',
    model: 'Liquid Jade Primo',
    price: '220',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/P2oqviM96_ozwsgZkj9Xf.jpg',
  },
  {
    id: 'ypkE9xhckmUbS1UJRm5dS',
    brand: 'Acer',
    model: 'Liquid Z330',
    price: '110',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ypkE9xhckmUbS1UJRm5dS.jpg',
  },
  {
    id: '80vJ3yDbtzNIgn_I8Y2m_',
    brand: 'Acer',
    model: 'Liquid Z320',
    price: '90',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/80vJ3yDbtzNIgn_I8Y2m_.jpg',
  },
  {
    id: 'Cu6y7RudjqPTBIYvW6QXd',
    brand: 'Acer',
    model: 'Liquid Z630S',
    price: '',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/Cu6y7RudjqPTBIYvW6QXd.jpg',
  },
  {
    id: 'MM2fHBcJqz2i32km9z2fj',
    brand: 'Acer',
    model: 'Liquid Z630',
    price: '200',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/MM2fHBcJqz2i32km9z2fj.jpg',
  },
  {
    id: 'ND9m-Ujc5THD1F7tG2sNk',
    brand: 'Acer',
    model: 'Liquid Z530S',
    price: '',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ND9m-Ujc5THD1F7tG2sNk.jpg',
  },
  {
    id: 'HDoYWSmljdIlnBYT3utez',
    brand: 'Acer',
    model: 'Liquid Z530',
    price: '150',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/HDoYWSmljdIlnBYT3utez.jpg',
  },
  {
    id: 'CbrppwKzpqRq_ScJDRbEy',
    brand: 'Acer',
    model: 'Liquid M330',
    price: '',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/CbrppwKzpqRq_ScJDRbEy.jpg',
  },
];

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
  return (
    <Container>
      <ProductGrid columns={4} gap={theme.space[4]} columns-s={1} columns-m={3}>
        {products.map(prod => (
          <ProductItem key={prod.id} product={prod} />
        ))}
      </ProductGrid>
    </Container>
  );
}

export default Products;
