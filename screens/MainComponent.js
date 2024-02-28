import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchProducts } from '../features/products/productsSlice';
import HomeScreen from './HomeScreen';
import ProductDetailScreen from './ProductDetailScreen';

const screenOptions = {
  headerTintColor: '#FFF',
  headerStyle: { backgroundColor: '#5637DD' }
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName='Home'>
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
        options={({ route }) => ({
          title: route.params.product.title
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

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }}
    >
      <StackNavigator />
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
