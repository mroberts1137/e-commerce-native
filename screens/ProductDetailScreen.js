import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
  FlatList
} from 'react-native';
import { Card, Rating, Button, Icon, Divider } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { addItem } from '../features/cart/cartSlice';
import { selectByCategory } from '../features/products/productsSlice';
import ProductCard from '../features/products/ProductCard';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const similarProducts = useSelector(selectByCategory(product.category));

  const handleAddToCart = () => {
    dispatch(addItem(product));
    Alert.alert('', `"${product.title}" added to cart`, '', [{ text: 'OK' }]);
  };

  const renderSimilarProduct = ({ item: product }) => {
    return <ProductCard product={product} />;
  };

  return (
    <ScrollView>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Divider />
      <View
        style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 10 }}
      >
        <Rating
          readonly
          startingValue={product.rating.rate}
          imageSize={20}
          style={{
            alignItems: 'flex-start',
            paddingLeft: 5,
            paddingRight: 10
          }}
        />
        <Text>({product.rating.count})</Text>
      </View>
      <Text style={{ textAlign: 'left', fontSize: 18, marginLeft: 10 }}>
        Price: ${product.price}
      </Text>
      <Text style={styles.text}>{product.description}</Text>
      <Button
        onPress={() => handleAddToCart()}
        title='Add to Cart'
        color='#FF9505'
        icon={
          <Icon
            name='cart-plus'
            type='font-awesome'
            color='#FFF'
            iconStyle={{ marginRight: 10 }}
          />
        }
        buttonStyle={{
          backgroundColor: '#FF9505',
          width: 200,
          marginLeft: 100,
          marginBottom: 20
        }}
      />
      <Divider />

      <Text style={styles.title}>Similar Items</Text>
      <FlatList
        data={similarProducts}
        renderItem={renderSimilarProduct}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 10
  },
  image: {
    width: 350,
    height: 350,
    marginHorizontal: 20
  },
  button: {
    width: 100,
    height: 50
  }
});

export default ProductDetailScreen;
