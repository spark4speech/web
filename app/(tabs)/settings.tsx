import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSettings } from '@/contexts/SettingsContext';
import Toast from 'react-native-root-toast';
import Slider from '@react-native-community/slider';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { volume, setVolume, voiceSpeed, setVoiceSpeed, voicePitch, setVoicePitch } = useSettings();
  const [buttonsPerRow] = useState(12);
  const [colorTheme] = useState('light');

  const handleSave = () => {
    Toast.show('Settings saved successfully', {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Volume */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Volume: {volume.toFixed(1)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          step={0.1}
          value={volume}
          onValueChange={setVolume}
        />
        <View style={styles.rangeLabels}>
          <Text>0</Text>
          <Text>1</Text>
        </View>
      </View>

      {/* Voice Speed */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Voice Speed: {voiceSpeed.toFixed(1)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.5}
          maximumValue={2}
          step={0.1}
          value={voiceSpeed}
          onValueChange={setVoiceSpeed}
        />
        <View style={styles.rangeLabels}>
          <Text>0.5</Text>
          <Text>2</Text>
        </View>
      </View>

      {/* Voice Pitch */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Voice Pitch: {voicePitch.toFixed(1)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0.5}
          maximumValue={2}
          step={0.1}
          value={voicePitch}
          onValueChange={setVoicePitch}
        />
        <View style={styles.rangeLabels}>
          <Text>0.5</Text>
          <Text>2</Text>
        </View>
      </View>

      {/* Buttons Per Row (disabled) */}
      {/* <View style={styles.formGroup}>
        <Text style={styles.label}>Number of Buttons per Row (disabled)</Text>
        <Text style={styles.disabledText}>{buttonsPerRow}</Text>
      </View> */}

      {/* Color Theme (disabled) */}
      {/* <View style={styles.formGroup}>
        <Text style={styles.label}>Color Theme (disabled)</Text>
        <Text style={styles.disabledText}>{colorTheme}</Text>
      </View> */}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home' as never)}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  rangeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  disabledText: {
    fontSize: 16,
    color: 'gray',
  },
  saveButton: {
    backgroundColor: '#ff914d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  homeButton: {
    backgroundColor: '#7d8f9b',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
