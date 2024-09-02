import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Speech from "expo-speech";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TabParamList } from "@/app/(tabs)/_layout";

const foods = [
  {
    name: "foods",
    url: "https://cloud-68ucrctoz-hack-club-bot.vercel.app/0smiling-face-with-smiling-eyes_1f60a.png",
  },
  {
    name: "Happy",
    url: "/assets/imgs/foods/happy.png",
  },
  {
    name: "Sad",
    url: "/assets/imgs/foods/sad.png",
  },
  {
    name: "Angry",
    url: "/assets/imgs/foods/angry.png",
  },
  {
    name: "Scared",
    url: "/assets/imgs/foods/scared.png",
  },
  {
    name: "Love",
    url: "/assets/imgs/foods/love.png",
  },
  {
    name: "Joy",
    url: "/assets/imgs/foods/joy.png",
  },
  {
    name: "Surprised",
    url: "/assets/imgs/foods/surprised.png",
  },
  {
    name: "Disgust",
    url: "/assets/imgs/foods/disgust.png",
  },
  {
    name: "Anticipation",
    url: "/assets/imgs/foods/anticipation.png",
  },
  {
    name: "Anxious",
    url: "/assets/imgs/foods/anxious.png",
  },
  {
    name: "Frustrated",
    url: "/assets/imgs/foods/frustrated.png",
  },
  {
    name: "Excited",
    url: "/assets/imgs/foods/excited.png",
  },
  {
    name: "Disappointed",
    url: "/assets/imgs/foods/disappointed.png",
  },
  {
    name: "Embarrassed",
    url: "/assets/imgs/foods/embarrassed.png",
  },
  {
    name: "Worried",
    url: "/assets/imgs/foods/worried.png",
  },
  {
    name: "Content",
    url: "/assets/imgs/foods/content.png",
  },
  {
    name: "Lonely",
    url: "/assets/imgs/foods/lonely.png",
  },
  {
    name: "Jealous",
    url: "/assets/imgs/foods/jealous.png",
  },
  {
    name: "Compassion",
    url: "/assets/imgs/foods/compassion.png",
  },
  {
    name: "Grateful",
    url: "/assets/imgs/foods/grateful.png",
  },
  {
    name: "Pain",
    url: "/assets/imgs/foods/pain.png",
  },
  {
    name: "Relief",
    url: "/assets/imgs/foods/relief.png",
  },
  {
    name: "Confused",
    url: "/assets/imgs/foods/confused.png",
  },
  {
    name: "Thinking",
    url: "/assets/imgs/foods/thinking.png",
  },
  {
    name: "Sleepy",
    url: "/assets/imgs/foods/sleepy.png",
  },
  {
    name: "Sick",
    url: "/assets/imgs/foods/sick.png",
  },
  {
    name: "Hurt",
    url: "/assets/imgs/foods/hurt.png",
  },
  {
    name: "Sorrow",
    url: "/assets/imgs/foods/sorrow.png",
  },
  {
    name: "Annoyed",
    url: "/assets/imgs/foods/annoyed.png",
  },
  {
    name: "Hot",
    url: "/assets/imgs/foods/hot.png",
  },
  {
    name: "Cold",
    url: "/assets/imgs/foods/cold.png",
  },
  {
    name: "Hungry",
    url: "/assets/imgs/foods/hungry.png",
  },
  {
    name: "Silly",
    url: "/assets/imgs/foods/silly.png",
  },
];

const FoodScreen = () => {
  const navigator = useNavigation<NavigationProp<TabParamList>>();

  const [sentence, setSentence] = useState("");

  const handlePress = (foodName: string) => {
    setSentence((prev) => (prev ? `${prev} ${foodName}` : foodName));

    Speech.speak(foodName);
  };

  return (
    <View style={styles.container}>
      {/* Text Area */}
      <View style={styles.topArea}>
        <Text style={styles.placeholderText}>
          {sentence || "Start speaking...."}
        </Text>
      </View>

      {/* Blue Bar with Buttons */}
      <View style={styles.blueBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vocab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigator.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>

      {/* Grid of foods */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {Array.from({ length: 72 }).map((_, index) => {
          const food = foods[Math.floor(index / 2)];
          return (
            <View key={index} style={styles.gridItem}>
              {index % 2 === 0 && index % 24 < 12 && food ? (
                <TouchableOpacity onPress={() => handlePress(food.name)}>
                  <Image source={{ uri: food.url }} style={styles.icon} />
                  <Text style={styles.iconText}>{food.name}</Text>
                </TouchableOpacity>
              ) : index % 2 === 1 && index % 24 > 11 && food ? (
                <TouchableOpacity onPress={() => handlePress(food.name)}>
                  <Image source={{ uri: food.url }} style={styles.icon} />
                  <Text style={styles.iconText}>{food.name}</Text>
                </TouchableOpacity>
              ) : (
                <Image
                  source={{
                    uri: food?.name == "" ? food?.url || "" : "",
                  }}
                  style={styles.icon}
                />
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topArea: {
    height: "10%",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  placeholderText: {
    fontSize: 18,
    color: "#333",
    marginLeft: 20,
    fontWeight: "bold",
  },
  blueBar: {
    height: 50,
    backgroundColor: "#007bff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  gridItem: {
    width: "7.33%",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
    color: "#333",
  },
});

export default FoodScreen;
