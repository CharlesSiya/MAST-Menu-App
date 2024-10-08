import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Salad', description: 'Fresh garden salad', course: 'Starter', price: 50 },
    { name: 'Steak', description: 'Grilled steak with veggies', course: 'Main', price: 150 }
  ]);

  // Function to calculate the average price per course
  const calculateAveragePrice = (course) => {
    const itemsOfCourse = menuItems.filter(item => item.course === course);
    if (itemsOfCourse.length === 0) return 0;
    const total = itemsOfCourse.reduce((sum, item) => sum + item.price, 0);
    return total / itemsOfCourse.length;
  };

  return (
    <View>
      <Text>Total Menu Items: {menuItems.length}</Text>
      <Text>Average Price for Starters: {calculateAveragePrice('Starter')}</Text>
      <Text>Average Price for Mains: {calculateAveragePrice('Main')}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.description} (${item.price})</Text>
          </View>
        )}
      />

      <Button title="Add Menu Items" onPress={() => navigation.navigate('AddMenu')} />
      <Button title="Filter Menu" onPress={() => navigation.navigate('Filter')} />
    </View>
  );
};

export default HomeScreen;
