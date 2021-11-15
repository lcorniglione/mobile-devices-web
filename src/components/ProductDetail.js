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
} from 'components/styled';
import * as mq from 'styles/mediaQueries';
import {useDevice, useAddItemToCart} from 'hooks/devices';

const ProductDetailGrid = styled(Grid)({
  [mq.medium]: {
    gridTemplateColumns: p => `repeat(${p['columns-m']}, 1fr);`,
  },
  [mq.small]: {
    gridTemplateColumns: p => `repeat(${p['columns-s']}, 1fr);`,
  },
});

const DetailCard = styled(Card)({
  [mq.large]: {
    minWidth: 350,
  },
  [mq.small]: {
    maxWidth: 300,
  },
});

const TextFlex = styled(Flex)({
  [mq.small]: {
    flexDirection: 'column',
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
            <img
              src={product.imgUrl}
              alt="device"
              css={`
                height: auto;
                width: 90%;
                margin-bottom: ${theme.space[5]};
              `}
            />
          </Flex>

          <H3>{product.brand}</H3>
          <H5>{product.model}</H5>
        </DetailCard>

        <Flex direction="column" gap={theme.space[4]}>
          <DetailCard>
            <H4>Descripción de Producto</H4>
            <Flex direction="column" gap={theme.space[1]}>
              <TextFlex justifyContent="space-between" alignItems="center">
                <Paragraph>CPU</Paragraph>
                <Paragraph>{product.cpu}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph>RAM</Paragraph>
                <Paragraph>{product.ram}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph>Sistema Operativo</Paragraph>
                <Paragraph>{product.os}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph>Resolucion de pantalla</Paragraph>
                <Paragraph maxWidth="50%">
                  {product.displayResolution}
                </Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph>Bateria</Paragraph>
                <Paragraph>{product.battery}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph>Camaras</Paragraph>
                <Paragraph>{product.primaryCamera}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph>Dimensiones</Paragraph>
                <Paragraph>{product.dimentions}</Paragraph>
              </TextFlex>
              <TextFlex
                justifyContent="space-between"
                alignItems="center"
                gap={theme.space[1]}
              >
                <Paragraph>Peso</Paragraph>
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
                    label="Color"
                    {...register('colorCode', {
                      required: {message: 'Campo Requerido', value: true},
                    })}
                    id="color"
                  >
                    <Option disabled value="" label="Seleccione uno" />
                    <Option value="1" label="Blanco" />
                    <Option value="2" label="Negro" />
                  </Dropdown>
                </FormElement>
                <FormElement error={errors.storageCode}>
                  <Dropdown
                    label="Almacenamiento"
                    {...register('storageCode', {
                      required: {
                        message: 'Campo Requerido',
                        value: true,
                      },
                    })}
                    id="storage"
                  >
                    <Option disabled value="" label="Seleccione uno" />
                    <Option value="1" label="64gb" />
                    <Option value="2" label="128gb" />
                  </Dropdown>
                </FormElement>

                <PrimaryButton type="submit" disabled={isLoadingItemToCart}>
                  <Flex alignItems="center" justifyContent="center">
                    Agregar al Carrito
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
