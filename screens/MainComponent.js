import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';

import { fetchProducts } from '../features/products/productsSlice';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <View>
      <Text>Main</Text>
    </View>
  );
};

export default Main;
