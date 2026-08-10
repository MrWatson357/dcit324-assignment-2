import React, {useState} from "react";
import { View, Text, StyleSheet,Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import {WorkoutDetailsRouteProp} from "../types/navigation";

export const WorkoutDetailsScreen: React.FC = () => {
    const route = useRoute<WorkoutDetailsRouteProp>();
    const navigation = useNavigation();
    const { workout } = route.params;

     const [isCompleted, setIsCompleted] = useState(false);
     return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topBar}>
                    <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={24} color="#1A1A1A" />
                    </TouchableOpacity>
                    <Text style={styles.navtitle}>Details</Text>
                <View style={{ width: 40 }} />
                </View>

                <View style={styles.heroSection}>
                    <View style={styles.circleImageWrapper}>
                        <Image source={{ uri: workout.image }} style={styles.heroImage} />
                    </View>

                <View style={styles.statsRow}>
                    <View style={styles.pill}>
                        <Text style={styles.pillLabel}>Category</Text>
                        <Text style={styles.pillValue}>{workout.category}</Text>
                    </View>
                    <View style={styles.pill}>
                        <Text style={styles.pillLabel}>Time</Text>
                        <Text style={styles.pillValue}>{workout.duration}</Text>
                    </View>
                </View>

                <Text style={styles.title}>{workout.title}</Text>
                <Text style={styles.subtitle}>{workout.caloriesBurned} Total Burn</Text>
                </View>

                <View style={styles.detailsBody}>
                    <Text style={styles.sectionHeader}>Workout Overview</Text>
                    <Text style={styles.description}>{workout.description}</Text>
                </View>
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={[
                            styles.actionbutton,
                            isCompleted && styles.completedBtn,
                        ]}
                        onPress={() => setIsCompleted(!isCompleted)}
                        >
                            <Ionicons
                            name={isCompleted ? "checkmark-circle" : "play-circle"}
                            size={24}
                            color="#FFFFFF"
                            />
                            <Text style={styles.actionButtonText}>
                                {isCompleted ? "Completed" : "Start Workout"}
                            </Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
     );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF5F7",
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 16,
    },
    iconButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 10,
    },
    navtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1A1A1A",
    },
    heroSection: {
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    circleImageWrapper: {
        width: 150,
        height: 150,
        borderRadius: 70,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: "#FF4D6D",
        marginBottom: 20,
    },
    heroImage: {
        width: "100%",
        height: "100%",
    },
    statsRow: {
        flexDirection: "row",
        gap: 13,
        marginBottom: 17,
    },
    pill:{
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: "center",
    },
    pillLabel: {
        fontSize: 12, 
        color: "#888888",
        fontWeight: "600",
    },
    pillValue: {
        fontSize: 14,
        color: "#FF4D6D",
        fontWeight: "700",
        marginTop: 2,
        
    },
    title: {
        fontSize: 22,
        fontWeight: "800",
        color: "#1A1A1A",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "400",
        color: "#FF4D6D",
        marginTop: 4,
    },
    detailsBody: {
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 24,
        marginTop: 24,
        minHeight: 200,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1A1A1A",
        marginBottom: 9,
    },
    description: {
        fontSize: 14,
        color: "#666",
        lineHeight: 22,
    },
    footer: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 60,
        borderTopWidth: 1,
        borderTopColor: "#F5f5f5",

    },
    actionbutton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF4D6D",
        paddingVertical: 16,
        borderRadius: 20,
    },
    completedBtn: {
        backgroundColor: "#2ECC71",
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#FFFFFF",
    },
});




