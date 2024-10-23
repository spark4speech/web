import { useContext, useState } from "react";
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
import { emotions } from "@/constants/assets/emotions";
import { SentenceContext } from "@/contexts/SentenceContext";
import { useSettings } from "@/contexts/SettingsContext";
import OnScreenKeyboard from "@/components/OnScreenKeyboard";

const emotionsScreen = () => {
  const navigator = useNavigation<NavigationProp<TabParamList>>();

  const { sentence, setSentence } = useContext(SentenceContext);
  const { volume, voiceSpeed, voicePitch } = useSettings();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handlePress = (destination: string) => {
    setSentence(sentence ? `${sentence} ${destination as string}` : destination as string);

    Speech.speak(destination, { rate: voiceSpeed, pitch: voicePitch, volume });
  };

  const handleKeyPress = (key: string) => {
    setSentence(sentence ? `${sentence}${key}` : key);
    Speech.speak(key.toLowerCase(), { rate: voiceSpeed, pitch: voicePitch, volume });
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
  }

  const handleCloseKeyboard = () => {
    toggleKeyboard();
  };

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
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClear}
        >
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
          onPress={() => navigator.navigate("Settings")}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleSpeakSentence}>
          <Image  
            source={require("@/assets/images/spark-black-on-orange.png")}
            style={{ width: 160, height: 160, marginBottom: -3, marginRight: -69  }}
          />
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
                  <Image source={emotion.url} style={styles.icon} />
                  <Text style={styles.iconText}>{emotion.name}</Text>
                </TouchableOpacity>
              ) : index % 2 === 1 && index % 24 > 11 && emotion ? (
                <TouchableOpacity onPress={() => handlePress(emotion.name)}>
                  <Image source={emotion.url} style={styles.icon} />
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

      {/* Keyboard */}
      <TouchableOpacity style={styles.keyboardButton} onPress={toggleKeyboard}>
        <Text style={styles.keyboardButtonText}>⌨️ Keyboard</Text>
      </TouchableOpacity>

      {isKeyboardVisible && (
        <OnScreenKeyboard onKeyPress={handleKeyPress} onClose={handleCloseKeyboard} />
      )}
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
    marginBottom: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 5,
    paddingTop: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    alignSelf: "center",
  },
  iconText: {
    fontSize: 12,
    color: "#333",
    alignSelf: "center",
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

export default emotionsScreen;
