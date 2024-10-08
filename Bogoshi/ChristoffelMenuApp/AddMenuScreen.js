import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const AddMenuScreen = ({ navigation }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  // Mock global menu array (use context or Redux in a larger app)
  let globalMenu = [];

  const addItemToMenu = () => {
    const newItem = { name: dishName, description, course, price: parseFloat(price) };
    globalMenu.push(newItem);
    navigation.navigate('Home'); // Go back to the home screen after adding
  };

  return (
    <View>
      <TextInput placeholder="Dish Name" value={dishName} onChangeText={setDishName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Course (Starter/Main/Dessert)" value={course} onChangeText={setCourse} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Button title="Add Item" onPress={addItemToMenu} />
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default AddMenuScreen;
