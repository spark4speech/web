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

const DEFAULT_ICON = "https://cloud-nhes44ias-hack-club-bot.vercel.app/0qm.jpg";

export const PAGE_ICONS: { [key: string]: string } = {
  Emotions:
    "https://cloud-68ucrctoz-hack-club-bot.vercel.app/0smiling-face-with-smiling-eyes_1f60a.png",
  Food: "https://cloud-6ukpbirpk-hack-club-bot.vercel.app/0hamburger-emoji-1024x891-ircy4ojs.png",
  Fruit: "https://cloud-9nxx2je0t-hack-club-bot.vercel.app/0apple.png",
  Vegetable: "@/assets/imgs/foods/vegetables/zani.png",
  Dessert: "@/assets/imgs/foods/vegetables/shortcake.png",
};

const IndexScreen = () => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (destination: keyof TabParamList) => {
    navigation.navigate(destination);
  };

  const tabKeys = Object.keys(TabParamListValues).slice(1);
  const defaultItemsCount = 72 - tabKeys.length;

  return (
    <View style={styles.container}>
      {/* Text Area */}
      <View style={styles.topArea}>
        <Text style={styles.placeholderText}>Text here</Text>
      </View>

      {/* Blue Bar with Buttons */}
      <View style={styles.blueBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            return (
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Hello World!</Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
              </View>
            );
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
        {Object.keys(TabParamListValues)
          .slice(1)
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default IndexScreen;
