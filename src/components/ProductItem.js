import {useTheme} from 'styled-components';
import styled from 'styled-components/macro';
import {FiArrowRight} from 'react-icons/fi';

import {Link, Card, H4, H3} from 'components/styled';

const ProductItemCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minWidth: 300,
  maxWidth: 350,
});

const PriceTitle = styled(H4)({
  marginBottom: 0,
});

function ProductItem({product}) {
  const theme = useTheme();
  return (
    <ProductItemCard>
      <img
        src={product.imgUrl}
        alt="device"
        style={{marginBottom: theme.space[3]}}
      />
      <H3>{product.brand}</H3>
      <H4>{product.model}</H4>
      <div css="display: flex; justify-content: space-between; width: 100%; align-items: center;">
        <PriceTitle font={theme.fonts.bold} color={theme.colors.accent}>
          $ {product.price || '-'}
        </PriceTitle>
        <Link to={`/products/${product.id}`} color={theme.colors.primary}>
          Ver Más
          <FiArrowRight
            css={`
              margin-left: ${theme.space[0]};
            `}
          />
        </Link>
      </div>
    </ProductItemCard>
  );
}

export default ProductItem;
