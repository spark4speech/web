import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useWordPrediction } from '../hooks/useWordPrediction';

const TestPredictionScreen = () => {
  const { predictions, predictNextWords } = useWordPrediction();
  const [input, setInput] = useState("");

  const handleInputChange = (text: string) => {
    setInput(text);
    predictNextWords(text);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Type something..."
        value={input}
        onChangeText={handleInputChange}
      />
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Predictions:</Text>
      {predictions.length > 0 ? (
        predictions.map((word, index) => <Text key={index}>• {word}</Text>)
      ) : (
        <Text>No predictions available</Text>
      )}
    </View>
  );
};

export default TestPredictionScreen;
