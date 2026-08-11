export interface Workout {
  id: string;
  title: string;
  duration: string; 
  caloriesBurned: string;
  category: string;
  description: string;
  image: string;
}

export const workouts: Workout[] = [
  {
    id: "1",
    title: "Morning Run",
    duration: "30 minutes",
    caloriesBurned: "300 kcal",
    category: "Running",
    description: "A morning run to start the day.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Yoga Session",
    duration: "45 minutes",
    caloriesBurned: "200 kcal",
    category: "Flexibility",
    description: "A calming yoga session to improve flexibility and awaken muscles.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Strength Training",
    duration: "60 minutes",
    caloriesBurned: "400 kcal",
    category: "Strength",
    description: "A strength training workout to build muscles, stability, and endurance.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Cycling",
    duration: "90 minutes",
    caloriesBurned: "650 kcal",
    category: "Cycling",
    description: "A cycling session to explore new trails and enjoy the outdoors.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "Dumbbell Session",
    duration: "45 minutes",
    caloriesBurned: "250 kcal",
    category: "Strength",
    description: "A dumbbell session to target specific muscle groups and improve overall strength.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "HIIT Workout",
    duration: "50 minutes",
    caloriesBurned: "500 kcal",
    category: "Cardio",
    description: "A high-intensity interval training (HIIT) workout to boost metabolism and burn calories.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "7",
    title: "Walking",
    duration: "60 minutes",
    caloriesBurned: "450 kcal",
    category: "Walking",
    description: "A fast paced walk to burn fat.",
    image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "8",
    title: "Pilates Core",
    duration: "40 minutes",
    caloriesBurned: "220 kcal",
    category: "Flexibility",
    description: "A low-impact workout focusing on core strength, posture, and muscle tone.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "9",
    title: "Boxing Cardio",
    duration: "45 minutes",
    caloriesBurned: "550 kcal",
    category: "Cardio",
    description: "An energetic boxing and shadowboxing session for high-calorie burn.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "10",
    title: "Swimming Laps",
    duration: "50 minutes",
    caloriesBurned: "480 kcal",
    category: "Swimming",
    description: "Full-body endurance swimming routine targeting cardio and shoulder mobility.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
  }
];