import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WorkoutListScreen } from './src/screens/WorkoutListScreen';
import { WorkoutDetailsScreen } from './src/screens/WorkoutDetailsScreen';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="WorkoutList"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}