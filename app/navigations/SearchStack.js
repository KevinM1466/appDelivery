import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="search-stack" component={Search} options={{ title: "Buscar" }} />
    </Stack.Navigator>
  )
}