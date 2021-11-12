import styled from 'styled-components/macro';
import {useTheme} from 'styled-components';

import {
  Card,
  Grid,
  Container,
  Flex,
  Paragraph,
  H4,
  H5,
  H3,
} from 'components/styled';
import * as mq from 'styles/mediaQueries';

const product = {
  id: 'xyPoqGJxYR4Nn3yVGQcfI',
  brand: 'Acer',
  model: 'Iconia Tab 10 A3-A40',
  price: '230',
  imgUrl:
    'https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg',
  networkTechnology: 'No cellular connectivity',
  networkSpeed: '',
  gprs: 'No',
  edge: 'No',
  announced: '2016  April',
  status: 'Available. Released 2016  June',
  dimentions: '259 x 167 x 8.9 mm (10.20 x 6.57 x 0.35 in)',
  weight: '',
  sim: 'No',
  displayType: 'IPS LCD capacitive touchscreen  16M colors',
  displayResolution: '10.1 inches (~68.4% screen-to-body ratio)',
  displaySize: '1920 x 1200 pixels (~224 ppi pixel density)',
  os: 'Android 6.0 (Marshmallow)',
  cpu: 'Quad-core 1.3 GHz Cortex-A53',
  chipset: 'Mediatek MT8163A',
  gpu: 'Mali-T720 MP2',
  externalMemory: 'microSD  up to 256 GB (dedicated slot)',
  internalMemory: ['16 GB', '32 GB', '64 GB'],
  ram: '2 GB RAM',
  primaryCamera: '5 MP',
  secondaryCmera: '2 MP',
  speaker: 'Yes with stereo speakers (4 speakers)',
  audioJack: 'Yes',
  wlan: ['Wi-Fi 802.11 a/b/g/n/ac', 'dual-band', 'hotspot'],
  bluetooth: 'Yes',
  gps: '',
  nfc: '',
  radio: 'No',
  usb: 'microUSB 2.0',
  sensors: 'Accelerometer',
  battery: 'Non-removable Li-Ion battery',
  colors: ['Black'],
  options: {
    colors: [
      {
        code: 1000,
        name: 'Black',
      },
    ],
    storages: [
      {
        code: 2000,
        name: '16 GB',
      },
      {
        code: 2001,
        name: '32 GB',
      },
      {
        code: 2002,
        name: '64 GB',
      },
    ],
  },
};

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
  return (
    <Container>
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
          </DetailCard>
        </Flex>
      </ProductDetailGrid>
    </Container>
  );
}

export default ProductDetail;
