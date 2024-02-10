import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Loading from '../components/LoadingComponent';
import ProductsList from './ProductsList';
import FilterProducts from './FilterProducts';

const ProductsDisplay = ({ navigation }) => {
  const [filter, setFilter] = useState('all');

  return (
    <View>
      <FilterProducts onChange={() => setFilter('all')} />
      <ProductsList />
    </View>
  );
};

export default ProductsDisplay;
