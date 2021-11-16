import styled from 'styled-components/macro';
import {useTheme} from 'styled-components';
import {FiShoppingCart} from 'react-icons/fi';
import {useParams} from 'react-router-dom';
import {useForm} from 'react-hook-form';

import {
  Card,
  Grid,
  Container,
  Flex,
  Paragraph,
  H4,
  H5,
  H3,
  Dropdown,
  Option,
  PrimaryButton,
  Spinner,
  Form,
  FormElement,
  Image,
} from 'components/styled';
import * as mq from 'styles/mediaQueries';
import {useDevice, useAddItemToCart} from 'hooks/devices';
import {fontBold} from 'styles';
import dict from 'utils/dict';

const IMAGE_MIN_WIDTH = 454;
const IMAGE_MIN_HEIGHT = 601;

const ProductDetailGrid = styled(Grid)({
  [mq.medium]: {
    gridTemplateColumns: p => `repeat(${p['columns-m']}, 1fr);`,
    width: '100%',
  },
  [mq.small]: {
    gridTemplateColumns: p => `repeat(${p['columns-s']}, 1fr);`,
    width: '100%',
  },
});

const DetailCard = styled(Card)({
  [mq.large]: {
    minWidth: 350,
  },
});

const TextFlex = styled(Flex)({
  [mq.small]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const DetailImage = styled(Image)({
  [mq.small]: {
    minHeight: 'auto',
    minWidth: 'auto',
  },
  [mq.medium]: {
    minHeight: 'auto',
    minWidth: 'auto',
  },
});

function ProductDetail() {
  const theme = useTheme();
  let {id: deviceId} = useParams();
  const {data: product, isLoading} = useDevice(deviceId);
  const {mutate: handleAddItem, isLoading: isLoadingItemToCart} =
    useAddItemToCart();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {colorCode: '', storageCode: ''},
    shouldFocusError: false,
  });

  function handleAddItemToCart(data) {
    handleAddItem({
      id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      ...data,
    });
  }

  let view = null;
  if (isLoading) view = <Spinner size={24} />;
  else {
    view = (
      <ProductDetailGrid
        columns={2}
        columns-s={1}
        columns-m={1}
        gap={theme.space[4]}
      >
        <DetailCard>
          <Flex justifyContent="center" alignItems="center">
            <DetailImage
              src={product.imgUrl}
              alt="device"
              loading="lazy"
              minWidth={IMAGE_MIN_WIDTH}
              minHeight={IMAGE_MIN_HEIGHT}
            />
          </Flex>
          <H3>{product.brand}</H3>
          <H5>{product.model}</H5>
        </DetailCard>

        <Flex direction="column" gap={theme.space[4]}>
          <DetailCard>
            <H4>{dict.productDescription}</H4>
            <Flex direction="column" gap={theme.space[1]}>
              <TextFlex justifyContent="space-between" alignItems="center">
                <Paragraph font={fontBold}>{dict.CPU}</Paragraph>
                <Paragraph>{product.cpu}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph font={fontBold}>{dict.RAM}</Paragraph>
                <Paragraph>{product.ram}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph font={fontBold}>{dict.OS}</Paragraph>
                <Paragraph>{product.os}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph font={fontBold}>{dict.displayResolution}</Paragraph>
                <Paragraph maxWidth="50%">
                  {product.displayResolution}
                </Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph font={fontBold}>{dict.battery}</Paragraph>
                <Paragraph>{product.battery}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph font={fontBold}>{dict.camera}</Paragraph>
                <Paragraph>{product.primaryCamera}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph font={fontBold}>{dict.dimensions}</Paragraph>
                <Paragraph>{product.dimentions}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph font={fontBold}>{dict.weight}</Paragraph>
                <Paragraph>{product.weight || '-'}</Paragraph>
              </TextFlex>
            </Flex>
          </DetailCard>
          <DetailCard>
            <H4>Acciones</H4>
            <Form onSubmit={handleSubmit(handleAddItemToCart)}>
              <Flex direction="column" gap={theme.space[3]}>
                <FormElement error={errors.colorCode}>
                  <Dropdown
                    label={dict.color}
                    {...register('colorCode', {
                      required: {message: 'Campo Requerido', value: true},
                    })}
                    id="color"
                  >
                    <Option disabled value="" label={dict.selectOne} />
                    <Option value="1" label="Blanco" />
                    <Option value="2" label="Negro" />
                  </Dropdown>
                </FormElement>
                <FormElement error={errors.storageCode}>
                  <Dropdown
                    label={dict.storage}
                    {...register('storageCode', {
                      required: {
                        message: 'Campo Requerido',
                        value: true,
                      },
                    })}
                    id="storage"
                  >
                    <Option disabled value="" label={dict.selectOne} />
                    <Option value="1" label="64gb" />
                    <Option value="2" label="128gb" />
                  </Dropdown>
                </FormElement>

                <PrimaryButton type="submit" disabled={isLoadingItemToCart}>
                  <Flex alignItems="center" justifyContent="center">
                    {dict.addToCart}
                    {isLoadingItemToCart ? (
                      <Spinner css={{marginLeft: 10}} />
                    ) : (
                      <FiShoppingCart css={{marginLeft: 10}} />
                    )}
                  </Flex>
                </PrimaryButton>
              </Flex>
            </Form>
          </DetailCard>
        </Flex>
      </ProductDetailGrid>
    );
  }

  return <Container>{view}</Container>;
}

export default ProductDetail;
