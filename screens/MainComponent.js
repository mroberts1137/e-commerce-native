import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fetchProducts } from '../features/products/productsSlice';
import HomeScreen from './HomeScreen';
import ProductDetailScreen from './ProductDetailScreen';
import CartScreen from './CartScreen';

const screenOptions = {
  headerTintColor: '#FFF',
  headerStyle: { backgroundColor: '#5637DD' }
};

const Tab = createBottomTabNavigator();

const ProductsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen
        name='ProductDetail'
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.product.title
        })}
      />
    </Stack.Navigator>
  );
};

const CartNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName='Cart'>
      <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  );
};

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const tabBarOptions = {
    activeBackgroundColor: '#5637DD',
    inactiveBackgroundColor: '#CEC8FF',
    activeTintColor: '#FFF',
    inactiveTintColor: '#808080',
    labelStyle: { fontSize: 16 }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }}
    >
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name='Shop'
          component={ProductsNavigator}
          options={{
            tabBarIcon: (props) => {
              return (
                <Icon name='home' type='font-awesome' color={props.color} />
              );
            }
          }}
        />
        <Tab.Screen
          name='Cart'
          component={CartNavigator}
          options={{
            tabBarIcon: (props) => {
              return (
                <Icon
                  name='cart-plus'
                  type='font-awesome'
                  color={props.color}
                />
              );
            }
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: '#FFF',
    fontSize: 24
  }
});

export default Main;
