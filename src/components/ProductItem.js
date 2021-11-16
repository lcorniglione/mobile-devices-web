import {useTheme} from 'styled-components';
import styled from 'styled-components/macro';
import {FiArrowRight} from 'react-icons/fi';

import dict from 'utils/dict';
import {Link, Card, H4, H3, ImagePlaceholder, Image} from 'components/styled';

const IMAGE_WIDTH = 160;
const IMAGE_HEIGHT = 212;

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
      <ImagePlaceholder height={IMAGE_HEIGHT} width={IMAGE_WIDTH}>
        <Image
          src={product.imgUrl}
          loading="lazy"
          alt="device"
          style={{
            marginBottom: theme.space[3],
            height: IMAGE_HEIGHT,
            width: IMAGE_WIDTH,
          }}
        />
      </ImagePlaceholder>
      <H3>{product.brand}</H3>
      <H4>{product.model}</H4>
      <div css="display: flex; justify-content: space-between; width: 100%; align-items: center;">
        <PriceTitle font={theme.fonts.bold} color={theme.colors.accent}>
          $ {product.price || '-'}
        </PriceTitle>
        <Link to={`/products/${product.id}`} color={theme.colors.primary}>
          {dict.seeMore}
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
