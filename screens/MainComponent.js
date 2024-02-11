import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchProducts } from '../features/products/productsSlice';
import HomeScreen from './HomeScreen';
import ProductDetailScreen from './ProductDetailScreen';

const screenOptions = {
  headerTintColor: '#FFF',
  headerStyle: { backgroundColor: '#5637DD' }
};

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={() => ({
          title: 'Home',
          headerLeft: () => {
            <Icon
              name='home'
              type='font-awesome'
              iconStyles={styles.stackIcon}
            />;
          }
        })}
      />
      <Stack.Screen
        name='ProductDetail'
        component={ProductDetailScreen}
        options={() => ({
          title: 'Product Detail'
        })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <StackNavigator />;
};

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: '#FFF',
    fontSize: 24
  }
});

export default Main;
