import React from 'react';
import { StyleSheet, View, FlatList, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WorkoutCard } from '../components/WorkoutCard';
import { workouts, Workout } from '../data/workouts';
import { WorkoutListNavigationProp } from '../types/navigation';

export const WorkoutListScreen: React.FC = () => {
  const navigation = useNavigation<WorkoutListNavigationProp>();

  const handleSelectWorkout = (workout: Workout) => {
    navigation.navigate('WorkoutDetails', { workout });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>PUMP HOUSE</Text>
        <Text style={styles.headerTitle}>Workout Routines</Text>
      </View>

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutCard
            title={item.title}
            duration={item.duration}
            caloriesBurned={item.caloriesBurned}
            image={item.image}
            onPress={() => handleSelectWorkout(item)}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FF4D6D',
    letterSpacing: 1.5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    marginTop: 2,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
});