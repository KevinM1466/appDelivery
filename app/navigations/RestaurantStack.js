import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurants from '../screens/Restaurants';

const Stack = createNativeStackNavigator();

export default function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="restaurants-stack" 
        component={Restaurants} 
        options={{title: "Restaurantes"}} />
    </Stack.Navigator>
  )
}