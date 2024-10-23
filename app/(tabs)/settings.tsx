import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSettings } from '@/contexts/SettingsContext';
import Toast from 'react-native-root-toast';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { volume, setVolume, voiceSpeed, setVoiceSpeed, voicePitch, setVoicePitch } = useSettings();
  const [buttonsPerRow, setButtonsPerRow] = useState(12);
  const [colorTheme, setColorTheme] = useState('light');

  const handleSave = () => {
    let _ = Toast.show('Settings saved successfully', {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Settings</h2>
      
      {/* Volume */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Volume: {volume}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          style={styles.range}
        />
        <div style={styles.rangeLabels}>
          <span>0</span>
          <span>1</span>
        </div>
      </div>

      {/* Voice Speed */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Voice Speed: {voiceSpeed}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={voiceSpeed}
          onChange={(e) => setVoiceSpeed(Number(e.target.value))}
          style={styles.range}
        />
        <div style={styles.rangeLabels}>
          <span>0.5</span>
          <span>2</span>
        </div>
      </div>

      {/* Voice Pitch */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Voice Pitch: {voicePitch}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={voicePitch}
          onChange={(e) => setVoicePitch(Number(e.target.value))}
          style={styles.range}
        />
        <div style={styles.rangeLabels}>
          <span>0.5</span>
          <span>2</span>
        </div>
      </div>

      {/* Buttons Per Row */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Number of Buttons per Row</label>
        <input
          type="number"
          min="5"
          max="12"
          value={buttonsPerRow}
          onChange={(e) => setButtonsPerRow(Number(e.target.value))}
          style={styles.input}
          disabled
        />
      </div>
      
      {/* Color Theme */}
      <div style={styles.formGroup}>
        <label style={styles.label}>Color Theme</label>
        <select
          value={colorTheme}
          onChange={(e) => setColorTheme(e.target.value)}
          style={styles.select}
          disabled
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      
      <button onClick={handleSave} style={styles.saveButton}>
        Save
      </button>
      <button onClick={() => navigation.navigate('Home' as never)} style={styles.homeButton}>
        Back to Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: '800px',
    margin: '0 auto',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '99%',
    padding: '8px',
    borderRadius: '5px',
    border: 'none',
    height: '15px',
  },
  range: {
    width: '100%',
  },
  rangeLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    marginTop: '5px',
  },
  select: {
    width: '101%',
    padding: '8px',
    height: '30px',
    border: 'none',
    borderRadius: '5px',
  },
  saveButton: {
    display: 'block',
    width: '101%',
    height: '40px',
    padding: '10px',
    backgroundColor: '#ff914d',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '14px',
  },
  homeButton: {
    display: 'block',
    width: '101%',
    height: '40px',
    padding: '10px',
    backgroundColor: '#7d8f9b',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '14px',
  },
};
