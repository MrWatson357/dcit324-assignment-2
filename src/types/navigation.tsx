import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import { Workout } from '../data/workouts';  

export type RootStackParamList = {
    WorkoutList: undefined;
    WorkoutDetails: { workout: Workout };
};

export type WorkoutListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WorkoutList'>;
export type WorkoutDetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WorkoutDetails'>;
export type WorkoutDetailsRouteProp = RouteProp<RootStackParamList, 'WorkoutDetails'>;