import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TabParamList, TabParamListValues } from "@/app/(tabs)/_layout";
import { Alert, Modal, Pressable } from "react-native";
import * as Speech from "expo-speech";

const DEFAULT_ICON = "https://cloud-nhes44ias-hack-club-bot.vercel.app/0qm.jpg";

export const PAGE_ICONS: { [key: string]: string } = {
  Emotions:
    "https://cloud-68ucrctoz-hack-club-bot.vercel.app/0smiling-face-with-smiling-eyes_1f60a.png",
  Food: "https://cloud-6ukpbirpk-hack-club-bot.vercel.app/0hamburger-emoji-1024x891-ircy4ojs.png",
  Fruit: "https://cloud-9nxx2je0t-hack-club-bot.vercel.app/0apple.png",
  Vegetable: "@/assets/imgs/foods/vegetables/zani.png",
  Dessert: "@/assets/imgs/foods/vegetables/shortcake.png",
  Clothing: "@/assets/imgs/clothing/shirt.png",
  Colors: "@/assets/imgs/colors/rainbow2.png",
  Shapes: "@/assets/imgs/shapes/circle.png",
  Transportation: "@/assets/imgs/transportation/car.png",
  Weather: "@/assets/img/weather/sunny.png",
  Body: "@assets/img/body/body.png",
  Hobbies: "@assets/img/hobbies/reading.png",
};

const SINGLE_BUTTONS = [
  {
    name: "The",
    image: "https://cloud-9nxx2je0t-hack-club-bot.vercel.app/0apple.png",
    isButton: true,
  },
  // Add more button objects here
];

const IndexScreen = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [sentence, setSentence] = useState("");

  const handlePress = (
    destination: keyof TabParamList | string,
    isButton?: boolean
  ) => {
    if (!isButton) {
      navigation.navigate(destination as keyof TabParamList);
    } else {
      setSentence((prev) =>
        prev ? `${prev} ${destination as string}` : (destination as string)
      );
      Speech.speak(destination as string);
    }
  };

  const tabKeys = Object.keys(TabParamListValues).slice(1);
  const defaultItemsCount = 72 - tabKeys.length - SINGLE_BUTTONS.length;

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>

      {/* Grid of Icons */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {/* Tab icons */}
        {tabKeys.map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.gridItem}
            onPress={() =>
              handlePress(
                TabParamListValues[Number(key) as number] as keyof TabParamList
              )
            }
          >
            <Image
              source={{
                uri: PAGE_ICONS[TabParamListValues[Number(key) as number]],
              }}
              style={styles.icon}
            />
            <Text style={styles.iconText}>
              {TabParamListValues[Number(key) as number]}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Single buttons */}
        {SINGLE_BUTTONS.map((button, index) => (
          <TouchableOpacity
            key={`button-${index}`}
            style={styles.gridItem}
            onPress={() => handlePress(button.name, button.isButton)}
          >
            <Image source={{ uri: button.image }} style={styles.icon} />
            <Text style={styles.iconText}>{button.name}</Text>
          </TouchableOpacity>
        ))}

        {/* Default placeholder icons */}
        {Array.from({ length: defaultItemsCount }).map((_, index) => (
          <TouchableOpacity
            key={`default-${index}`}
            style={styles.gridItem}
            onPress={() => handlePress("Home" as keyof TabParamList)}
          >
            <Image source={{ uri: DEFAULT_ICON }} style={styles.icon} />
            <Text style={styles.iconText}>?</Text>
          </TouchableOpacity>
        ))}
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

export default IndexScreen;
