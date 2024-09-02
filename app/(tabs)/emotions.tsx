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

const emotions = [
  {
    name: "Emotions",
    url: "https://cloud-68ucrctoz-hack-club-bot.vercel.app/0smiling-face-with-smiling-eyes_1f60a.png",
  },
  {
    name: "Happy",
    url: "/assets/imgs/emotions/happy.png",
  },
  {
    name: "Sad",
    url: "/assets/imgs/emotions/sad.png",
  },
  {
    name: "Angry",
    url: "/assets/imgs/emotions/angry.png",
  },
  {
    name: "Scared",
    url: "/assets/imgs/emotions/scared.png",
  },
  {
    name: "Love",
    url: "/assets/imgs/emotions/love.png",
  },
  {
    name: "Joy",
    url: "/assets/imgs/emotions/joy.png",
  },
  {
    name: "Surprised",
    url: "/assets/imgs/emotions/surprised.png",
  },
  {
    name: "Disgust",
    url: "/assets/imgs/emotions/disgust.png",
  },
  {
    name: "Anticipation",
    url: "/assets/imgs/emotions/anticipation.png",
  },
  {
    name: "Anxious",
    url: "/assets/imgs/emotions/anxious.png",
  },
  {
    name: "Frustrated",
    url: "/assets/imgs/emotions/frustrated.png",
  },
  {
    name: "Excited",
    url: "/assets/imgs/emotions/excited.png",
  },
  {
    name: "Disappointed",
    url: "/assets/imgs/emotions/disappointed.png",
  },
  {
    name: "Embarrassed",
    url: "/assets/imgs/emotions/embarrassed.png",
  },
  {
    name: "Worried",
    url: "/assets/imgs/emotions/worried.png",
  },
  {
    name: "Content",
    url: "/assets/imgs/emotions/content.png",
  },
  {
    name: "Lonely",
    url: "/assets/imgs/emotions/lonely.png",
  },
  {
    name: "Jealous",
    url: "/assets/imgs/emotions/jealous.png",
  },
  {
    name: "Compassion",
    url: "/assets/imgs/emotions/compassion.png",
  },
  {
    name: "Grateful",
    url: "/assets/imgs/emotions/grateful.png",
  },
  {
    name: "Pain",
    url: "/assets/imgs/emotions/pain.png",
  },
  {
    name: "Relief",
    url: "/assets/imgs/emotions/relief.png",
  },
  {
    name: "Confused",
    url: "/assets/imgs/emotions/confused.png",
  },
  {
    name: "Thinking",
    url: "/assets/imgs/emotions/thinking.png",
  },
  {
    name: "Sleepy",
    url: "/assets/imgs/emotions/sleepy.png",
  },
  {
    name: "Sick",
    url: "/assets/imgs/emotions/sick.png",
  },
  {
    name: "Hurt",
    url: "/assets/imgs/emotions/hurt.png",
  },
  {
    name: "Sorrow",
    url: "/assets/imgs/emotions/sorrow.png",
  },
  {
    name: "Annoyed",
    url: "/assets/imgs/emotions/annoyed.png",
  },
  {
    name: "Hot",
    url: "/assets/imgs/emotions/hot.png",
  },
  {
    name: "Cold",
    url: "/assets/imgs/emotions/cold.png",
  },
  {
    name: "Hungry",
    url: "/assets/imgs/emotions/hungry.png",
  },
  {
    name: "Silly",
    url: "/assets/imgs/emotions/silly.png",
  },
];

const EmotionsScreen = () => {
  const navigator = useNavigation<NavigationProp<TabParamList>>();

  const [sentence, setSentence] = useState("");

  const handlePress = (emotionName: string) => {
    setSentence((prev) => (prev ? `${prev} ${emotionName}` : emotionName));

    Speech.speak(emotionName);
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

      {/* Grid of Emotions */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {Array.from({ length: 72 }).map((_, index) => {
          const emotion = emotions[Math.floor(index / 2)];
          return (
            <View key={index} style={styles.gridItem}>
              {index % 2 === 0 && index % 24 < 12 && emotion ? (
                <TouchableOpacity onPress={() => handlePress(emotion.name)}>
                  <Image source={{ uri: emotion.url }} style={styles.icon} />
                  <Text style={styles.iconText}>{emotion.name}</Text>
                </TouchableOpacity>
              ) : index % 2 === 1 && index % 24 > 11 && emotion ? (
                <TouchableOpacity onPress={() => handlePress(emotion.name)}>
                  <Image source={{ uri: emotion.url }} style={styles.icon} />
                  <Text style={styles.iconText}>{emotion.name}</Text>
                </TouchableOpacity>
              ) : (
                <Image
                  source={{
                    uri: emotion?.name == "" ? emotion?.url || "" : "",
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

export default EmotionsScreen;
