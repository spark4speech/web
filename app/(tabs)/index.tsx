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
import { TabParamList, TabParamListValues } from "@/app/(tabs)/_layout";
import { Alert, Modal, Pressable } from "react-native";
import * as Speech from "expo-speech";
import { icons } from "@/constants/assets/categoryIcons";
import { singleButtonIcons } from "@/constants/singleButtonIcons";
import { SentenceContext } from "@/contexts/SentenceContext";

const DEFAULT_ICON = "https://cloud-nhes44ias-hack-club-bot.vercel.app/0qm.jpg";

const IndexScreen = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const { sentence, setSentence } = useContext(SentenceContext);

  const handlePress = (
    destination: keyof TabParamList | string,
    isButton?: boolean
  ) => {
    if (!isButton) {
      navigation.navigate(destination as keyof TabParamList | any);
    } else {
      setSentence(sentence ? `${sentence} ${destination as string}` : destination as string);
      Speech.speak(destination as string);
    }
  };

  const tabKeys = Object.keys(TabParamListValues).slice(1);
  const defaultItemsCount = 72 - tabKeys.length - singleButtonIcons.length;

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
            navigation.navigate("Settings");
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
            <Image source={button.image as unknown as undefined} style={styles.icon} />
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
