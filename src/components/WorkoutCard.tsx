import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

interface WorkoutCardProps {
  title: string;
  duration: string;
  caloriesBurned: string;
  image: string;
  onPress: () => void;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  duration,
  caloriesBurned,
  image,
  onPress,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: image }}
        style={styles.image}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statPill}>
            <Ionicons name="time-outline" size={16} color="#CCFF00" />
            <Text style={styles.statText}>{duration}</Text>
          </View>
          <View style={styles.statPill}>
            <Ionicons name="flame-outline" size={16} color="#CCFF00" />
            <Text style={styles.statText}>{caloriesBurned}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.favouriteButton}
        onPress={() => setIsFavorite(!isFavorite)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? "#CCFF00" : "#A1A1AA"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4.5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#2A3418",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    marginRight: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 6.5,
  },
  statsRow: {
    flexDirection: "row",
    flexWrap: "wrap", 
    alignItems: "center",
    gap: 8,
  },
  statPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A3418",
    borderRadius: 11,
    paddingVertical: 5,
    paddingHorizontal: 8,
    gap: 5,
  },
  statText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#CCFF00",
  },
  favouriteButton: {
    backgroundColor: "#2A3418",
    borderRadius: 15,
    padding: 9,
  },
});