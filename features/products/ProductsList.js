import { Text, View, FlatList } from 'react-native';
import ProductCard from './ProductCard';

const ProductsList = ({ navigation, products }) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetail', { product })}
          />
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductsList;
