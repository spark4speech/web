import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [volume, setVolume] = useState(100);
  const [voiceSpeed, setVoiceSpeed] = useState(1);
  const [voicePitch, setVoicePitch] = useState(1);
  const [buttonsPerRow, setButtonsPerRow] = useState(12);
  const [colorTheme, setColorTheme] = useState('light');

  const handleSave = () => {
    console.log('Settings saved:', { volume, voiceSpeed, buttonsPerRow, colorTheme });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Settings</h2>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Volume</label>
        <input
          type="range"
          min="0"
          max="1"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          style={styles.range}
        />
      </div>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Voice Speed</label>
        <input
          type="range"
          min="0"
          max="1.5"
          step="0.1"
          value={voiceSpeed}
          onChange={(e) => setVoiceSpeed(Number(e.target.value))}
          style={styles.range}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Voice Pitch</label>
        <input
          type="range"
          min="0.0"
          max="2"
          step="0.1"
          value={voicePitch}
          onChange={(e) => setVoicePitch(Number(e.target.value))}
          style={styles.range}
        />
      </div>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Number of Buttons per Row</label>
        <input
          type="number"
          min="5"
          max="12"
          value={buttonsPerRow}
          onChange={(e) => setButtonsPerRow(Number(e.target.value))}
          style={styles.input}
        />
      </div>
      
      <div style={styles.formGroup}>
        <label style={styles.label}>Color Theme</label>
        <select
          value={colorTheme}
          onChange={(e) => setColorTheme(e.target.value)}
          style={styles.select}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      
      <button onClick={handleSave} style={styles.button}>
        Save
      </button>
      <button onClick={() => navigation.navigate('Home' as never)} style={styles.button}>
        Back to Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
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
    width: '100%',
    padding: '8px',
  },
  range: {
    width: '100%',
  },
  select: {
    width: '100%',
    padding: '8px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};