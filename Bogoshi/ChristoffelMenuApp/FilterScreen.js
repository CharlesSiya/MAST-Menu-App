import React, { useState } from 'react';
import { View, Button, FlatList, Text } from 'react-native';

const FilterScreen = ({ navigation }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  const menuItems = [
    { name: 'Salad', description: 'Fresh garden salad', course: 'Starter', price: 50 },
    { name: 'Steak', description: 'Grilled steak with veggies', course: 'Main', price: 150 }
  ];

  const filterByCourse = (course) => {
    const filtered = menuItems.filter(item => item.course === course);
    setFilteredItems(filtered);
  };

  return (
    <View>
      <Button title="Show Starters" onPress={() => filterByCourse('Starter')} />
      <Button title="Show Mains" onPress={() => filterByCourse('Main')} />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.description} (${item.price})</Text>
        )}
      />
      
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default FilterScreen;
