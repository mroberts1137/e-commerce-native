import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../features/products/ProductCard';

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.cartArray);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    setTotalCartPrice(cartItems.reduce((acc, cur) => acc + cur.price, 0));
  }, [cartItems]);

  const renderItem = ({ item }) => {
    return <ProductCard product={item} />;
  };

  if (cartItems.length === 0) {
    return (
      <View>
        <Text style={styles.title}>Cart</Text>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          There are no items in your cart.
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>Cart</Text>
      <Text style={styles.text}>Total: ${totalCartPrice}</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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

export default CartScreen;
