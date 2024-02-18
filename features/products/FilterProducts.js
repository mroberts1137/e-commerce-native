import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const FilterProducts = (props) => {
  const { filter, handleSortChange } = props;

  return (
    <View>
      <Text style={{ marginRight: '5px' }}>Sort By:</Text>
      <RNPickerSelect
        onValueChange={(value) => handleSortChange(value)}
        value={filter}
        items={[
          { label: 'All', value: 'All' },
          { label: 'Featured', value: 'Featured' },
          { label: "Men's Clothing", value: 'Mens' },
          { label: "Womens's Clothing", value: 'Womens' },
          { label: 'Jewelery', value: 'Jewelery' },
          { label: 'Electronics', value: 'Electronics' },
          { label: 'Alphabetically, A-Z', value: 'AZ' },
          { label: 'Alphabetically, Z-A', value: 'ZA' },
          { label: 'Price, Low to High', value: 'LowToHigh' },
          { label: 'Price, High to Low', value: 'HighToLow' }
        ]}
      />
    </View>
  );
};

export default FilterProducts;
