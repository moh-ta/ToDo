import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import homeScreen from './screens/HomeScreen';
import profileScreen from './screens/ProfileScreen';
import cartScreen from './screens/CartScreen';
import overScreen from './screens/OverScreen';
import productDetails from './screens/productDetails';
import {StyleSheet} from 'react-native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={homeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={cartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmark" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Over"
        component={overScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmark" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={MyTabs}
        />
        <Stack.Screen name="productDetails" component={productDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
