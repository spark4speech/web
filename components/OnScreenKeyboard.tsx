import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const keys = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '?',],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ' '],
];

type OnScreenKeyboardProps = {
  onKeyPress: (key: string) => void;
  onClose: () => void;
};

const OnScreenKeyboard: React.FC<OnScreenKeyboardProps> = ({ onKeyPress, onClose }) => {
  return (
    <View style={styles.keyboardContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>✖ Close</Text>
      </TouchableOpacity>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.keyRow}>
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              style={styles.key}
              onPress={() => onKeyPress(key)}
            >
                {key === ' ' ? (
                <Text style={styles.keyText}>⎵</Text>
                ) : (
                <Text style={styles.keyText}>{key}</Text>
                )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    width: '100%',
    backgroundColor: '#333',
    padding: 10,
  },
  closeButton: {
    width: "7%",
    padding: 10,
    backgroundColor: "#ff4d4d",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: "0.5%",
    marginTop: "0.5%",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  keyRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  key: {
    padding: 15,
    backgroundColor: "#555",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "9%",
  },
  keyText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default OnScreenKeyboard;
