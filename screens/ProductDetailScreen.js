import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Rating, Button, Icon, Divider } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { addItem } from '../features/cart/cartSlice';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <ScrollView>
      <Text style={styles.title}>{product.title}</Text>
      <Divider />

      <Image source={{ uri: product.image }} style={styles.image} />
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
        color='#5637DD'
        icon={
          <Icon
            name='cart-plus'
            type='font-awesome'
            color='#FFF'
            iconStyle={{ marginRight: 10 }}
          />
        }
        buttonStyle={{
          backgroundColor: '#5637DD',
          width: 200,
          marginLeft: 100,
          marginBottom: 20
        }}
      />
      <Divider />
      <Text style={styles.title}>Similar Items</Text>
      <ScrollView horizontal>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
      </ScrollView>
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
