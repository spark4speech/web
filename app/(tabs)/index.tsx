import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TabParamList, TabParamListValues } from "./tabTypes";
import { Alert, Modal, Pressable } from "react-native";
import * as Speech from "expo-speech";
import { icons } from "@/constants/assets/categoryIcons";
import { singleButtonIcons } from "@/constants/singleButtonIcons";
import { SentenceContext } from "@/contexts/SentenceContext";
import { useSettings } from "@/contexts/SettingsContext";
import OnScreenKeyboard from "@/components/OnScreenKeyboard";
import TestPredictionScreen from "@/components/TestPredictions";

const DEFAULT_ICON = "https://cloud-nhes44ias-hack-club-bot.vercel.app/0qm.jpg";

const IndexScreen = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const { sentence, setSentence } = useContext(SentenceContext);
  const { volume, voiceSpeed, voicePitch } = useSettings();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handlePress = (
    destination: keyof TabParamList | string,
    isButton?: boolean
  ) => {
    if (!isButton) {
      navigation.navigate(destination as keyof TabParamList | any);
    } else {
      setSentence(
        sentence
          ? `${sentence} ${destination as string}`
          : (destination as string)
      );
      Speech.speak(destination.toLowerCase() as string, {
        rate: voiceSpeed,
        pitch: voicePitch,
        volume,
      });
    }
  };

  const handleKeyPress = (key: string) => {
    setSentence(sentence ? `${sentence}${key}` : key);
    Speech.speak(key.toLowerCase(), {
      rate: voiceSpeed,
      pitch: voicePitch,
      volume,
    });
  };

  const handleBackspace = () => {
    if (isKeyboardVisible) {
      setSentence(sentence.substring(0, sentence.length - 1));
    } else {
      const words = sentence.trim().split(" ");
      words.pop();
      setSentence(words.join(" "));
    }
  };

  const handleClear = () => {
    setSentence("");
  };

  const handleSpeakSentence = () => {
    if (sentence) {
      Speech.speak(sentence, {
        rate: 0.7,
      });
    }
  };

  const toggleKeyboard = () => {
    setKeyboardVisible((prev) => !prev);
  };

  const handleCloseKeyboard = () => {
    toggleKeyboard();
  };

  const handleTestPredictions = () => {
    // navigation.navigate("Prediction");
    handleSpeakSentence();
  };

  const tabKeys = Object.keys(TabParamListValues).slice(1);
  const defaultItemsCount = 72 - tabKeys.length - singleButtonIcons.length;

  return (
    <View style={styles.container}>
      {/* Text Area */}
      <TouchableOpacity style={styles.topArea} onPress={handleSpeakSentence}>
        <Text style={styles.placeholderText}>
          {sentence || "Start speaking...."}
        </Text>

        {/* Backspace Button */}
        <TouchableOpacity
          style={styles.backspaceButton}
          onPress={handleBackspace}
        >
          <Text style={styles.backspaceText}>⌫</Text>
        </TouchableOpacity>

        {/* Clear Button */}
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Trash_font_awesome.svg/1024px-Trash_font_awesome.svg.png",
            }}
            style={styles.clearImage}
          />
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Blue Bar with Buttons */}
      <View style={styles.orangeBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleTestPredictions}>
          <Image
            source={require("@/assets/images/spark-black-on-orange.png")}
            style={{ width: 160, height: 160, marginBottom: -3 }}
          />
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
        {tabKeys
          .filter(
            (key) => TabParamListValues[Number(key) as number] !== "Prediction"
          )
          .map((key) => (
            <TouchableOpacity
              key={key}
              style={styles.gridItem}
              onPress={() =>
                handlePress(
                  TabParamListValues[
                    Number(key) as number
                  ] as keyof TabParamList
                )
              }
            >
              <Image
                source={icons[TabParamListValues[Number(key) as number]]}
                style={styles.icon}
              />
              <Text style={styles.iconText}>
                {TabParamListValues[Number(key) as number]}
              </Text>
            </TouchableOpacity>
          ))}

        {/* Single buttons */}
        {singleButtonIcons.map((button, index) => (
          <TouchableOpacity
            key={`button-${index}`}
            style={styles.gridItem}
            onPress={() => handlePress(button.name, true)}
          >
            <Image
              source={button.image as unknown as undefined}
              style={styles.icon}
            />
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

      {/* Keyboard */}
      <TouchableOpacity style={styles.keyboardButton} onPress={toggleKeyboard}>
        <Text style={styles.keyboardButtonText}>⌨️ Keyboard</Text>
      </TouchableOpacity>

      {isKeyboardVisible && (
        <OnScreenKeyboard
          onKeyPress={handleKeyPress}
          onClose={handleCloseKeyboard}
        />
      )}
    </View>
  );

  // return (
  //   <TestPredictionScreen />
  // )
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
    minHeight: 80,
  },
  placeholderText: {
    fontSize: 21,
    color: "#333",
    marginLeft: 20,
    fontWeight: "bold",
  },
  backspaceButton: {
    position: "absolute",
    right: 160,
    width: 60,
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    marginLeft: 10,
  },
  backspaceText: {
    fontSize: 25,
    color: "#333",
  },
  clearButton: {
    position: "absolute",
    right: 20,
    width: 130,
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f66",
    marginLeft: 10,
    flexDirection: "row",
    gap: 6,
  },
  clearImage: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  clearText: {
    fontSize: 23,
    color: "#fff",
  },
  orangeBar: {
    height: 70,
    backgroundColor: "#ff914d",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    borderColor: "#221F17",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: "#221F17",
    fontSize: 19,
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
  keyboardButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    padding: 10,
    backgroundColor: "#555",
    borderRadius: 5,
  },
  keyboardButtonText: {
    color: "#fff",
    fontSize: 16,
    padding: 5,
  },
});

export default IndexScreen;
