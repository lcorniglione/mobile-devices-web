import {useQuery, useMutation, useQueryClient} from 'react-query';

import {client} from 'utils/client';

const DEVICES_ENDPOINT = `/api/product`;
const CART_ENDPOINT = '/api/cart';

const getDevicesConfig = () => ({
  queryKey: ['devices'],
  queryFn: () => client(DEVICES_ENDPOINT).then(data => data),
});

const getDeviceConfig = deviceId => ({
  queryKey: ['device', deviceId],
  queryFn: () => client(DEVICES_ENDPOINT + `/${deviceId}`).then(data => data),
});

function useDevices() {
  const result = useQuery(getDevicesConfig());

  return {...result};
}

function useDevice(deviceId) {
  const result = useQuery(getDeviceConfig(deviceId));

  return {...result};
}

function useAddItemToCart() {
  const queryCache = useQueryClient();
  return useMutation(item => client(CART_ENDPOINT, {data: item}), {
    onSuccess: cartCount => {
      queryCache.setQueryData('cart-count', cartCount.count);
    },
  });
}

export {useDevices, useDevice, useAddItemToCart};
