import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import { fetchProducts } from '../features/products/productsSlice';
import { Icon } from 'react-native-elements';

const screenOptions = {
  headerTintColor: '#FFF',
  headerStyle: { backgroundColor: '#5637DD' }
};

const HomeNavigator = () => {
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
    </Stack.Navigator>
  );
};

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <View>
      <Text>Main</Text>
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
