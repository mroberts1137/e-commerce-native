import { Text, View, TouchableOpacity } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  if (product) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetail', { product })}
      >
        <Card containerStyle={{ padding: 0, width: 165 }}>
          <Card.Image source={{ uri: product.image }} />
          <Text
            numberOfLines={2}
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 20
            }}
          >
            {product.title}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Rating
              readonly
              startingValue={product.rating.rate}
              imageSize={20}
              style={{
                alignItems: 'flex-start',
                paddingBottom: '5%',
                paddingLeft: 5,
                paddingRight: 10
              }}
            />
            <Text>({product.rating.count})</Text>
          </View>

          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            ${product.price}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
  return <View />;
};

export default ProductCard;
