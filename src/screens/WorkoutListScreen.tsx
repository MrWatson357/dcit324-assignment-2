import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
      {/* --- HEADER SECTION --- */}
      <View style={styles.header}>
        {/* Top Header Icons Row */}
        <View style={styles.topRow}>
          <Image
            source={require('../../assets/profile.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.calendarBtn} activeOpacity={0.8}>
            <Ionicons name="calendar-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerSubtitle}>PUMP HOUSE</Text>
        <Text style={styles.headerTitle}>Workout Routines</Text>
      </View>

      {/* --- WORKOUT LIST --- */}
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
    backgroundColor: '#121212',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#CCFF00',
  },
  calendarBtn: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#CCFF00',
    letterSpacing: 2,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
});