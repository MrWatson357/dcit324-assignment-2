import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WorkoutListScreen } from './src/screens/WorkoutListScreen';
import { WorkoutDetailsScreen } from './src/screens/WorkoutDetailsScreen';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121212',
    card: '#121212',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="WorkoutList"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#121212' },
          animation: 'fade_from_bottom',
        }}
      >
        <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}