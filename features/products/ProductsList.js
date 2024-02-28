import { Text, View, FlatList } from 'react-native';
import ProductCard from './ProductCard';

const renderItem = ({ item }) => {
  return <ProductCard product={item} />;
};

const ProductsList = ({ products }) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductsList;
