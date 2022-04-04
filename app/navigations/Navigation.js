import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import RestaurantStack from './RestaurantStack';
import FavoritesStack from './FavoritesStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
import TopRestaurantStack from './TopRestaurantsStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: '#646464',
          tabBarActiveTintColor: '#00A680',
          tabBarIcon: ({ color }) => screenOption(route, color)
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantStack}
          options={{ title: "Restaurantes", headerShown: false }} />
        <Tab.Screen name="favorites" component={FavoritesStack} options={{ title: "Favoritos", headerShown: false }} />
        <Tab.Screen name="search" component={SearchStack} options={{ title: "Buscar", headerShown: false }} />
        <Tab.Screen name="topRestaurants" component={TopRestaurantStack} options={{ title: "Top 5", headerShown: false }} />
        <Tab.Screen name="account" component={AccountStack} options={{ title: "Cuenta", headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

function screenOption(route, color) {
  let iconName;
  switch (route.name) {
    case 'restaurants':
      iconName = 'location-arrow';
      break;
    case 'favorites':
      iconName = 'heart';
      break;
    case 'search':
      iconName = 'search';
      break;
    case 'topRestaurants':
      iconName = 'star';
      break;
    case 'account':
      iconName = 'user';
      break;
  }
  return (
    <Icon type='font-awesome' name={iconName} size={22} color={color} />
  )
}