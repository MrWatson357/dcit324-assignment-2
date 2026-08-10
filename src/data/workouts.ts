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
        image: "morning-run.jpg"
    },
    {
        id: "2",
        title: "Yoga Session",
        duration: "45 minutes",
        caloriesBurned: "200 kcal",
        category: "Flexibility",
        description: "A calming yoga session to improve flexibility and awaken muscles.",
        image: "yoga.jpg"
    },
    {
        id: "3",
        title: "Strength Training",
        duration: "60 minutes",
        caloriesBurned: "400 kcal",
        category: "Strength",
        description: "A strength training workout to build muscles, stability, and endurance.",
        image: "strength.jpg"
    },
    {
        id: "4",
        title: "Cycling",
        duration: "90 minutes",
        caloriesBurned: "650 kcal",
        category: "Cycling",
        description: "A cycling session to explore new trails and enjoy the outdoors.",
        image: "cycling.jpg"
    },
    {
        id: "5",
        title: "Dumbbell Session",
        duration: "45 minutes",
        caloriesBurned: "250 kcal",
        category: "Strength",
        description: "A dumbbell session to target specific muscle groups and improve overall strength.",
        image: "dumbbell.jpg"
    },
    {
        id: "6",
        title: "HIIT Workout",
        duration: "50 minutes",
        caloriesBurned: "500 kcal",
        category: "Cardio",
        description: "A high-intensity interval training (HIIT) workout to boost metabolism and burn calories.",
        image: "hiit.jpg"
    },
    {
        id: "7",
        title: "Walking",
        duration: "60 minutes",
        caloriesBurned:"450 kcal",
        category:"Walking",
        description: "A fast paced walk to burn fat",
        image:"walking.jpg"
    }
];