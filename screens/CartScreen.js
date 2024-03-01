import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { SwipeRow } from 'react-native-swipe-list-view';
import { removeItem } from '../features/cart/cartSlice';

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.cartArray);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalCartPrice(cartItems.reduce((acc, cur) => acc + cur.price, 0));
  }, [cartItems]);

  const renderItem = ({ item: product }) => {
    return (
      <SwipeRow rightOpenValue={-100}>
        {/* Hidden View */}
        <View style={styles.deleteView}>
          <TouchableOpacity
            style={styles.deleteTouchable}
            onPress={() =>
              Alert.alert(
                'Remove item from cart?',
                `Are you sure you wish to remove "${product.title}"?`,
                [
                  {
                    text: 'Cancel',
                    style: 'cancel'
                  },
                  {
                    text: 'OK',
                    onPress: () => dispatch(removeItem(product))
                  }
                ],
                { cancelable: false }
              )
            }
          >
            <Text style={styles.deleteText}>Remove</Text>
          </TouchableOpacity>
        </View>

        {/* Default View */}
        <View>
          <ListItem
            onPress={() =>
              navigation.navigate('Shop', {
                screen: 'ProductDetail',
                params: { product }
              })
            }
            bottomDivider
          >
            <Avatar source={{ uri: product.image }} />
            <ListItem.Content>
              <ListItem.Title>{product.title}</ListItem.Title>
              <ListItem.Subtitle>{product.price}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
      </SwipeRow>
    );
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
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.text}>Total: ${totalCartPrice}</Text>
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
  },
  deleteView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1
  },
  deleteTouchable: {
    backgroundColor: 'red',
    height: '100%',
    justifyContent: 'center'
  },
  deleteText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
    width: 100
  }
});

export default CartScreen;
