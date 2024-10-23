import React, { createContext, useState, useContext } from "react";

type SettingsContextType = {
  volume: number;
  setVolume: (value: number) => void;
  voiceSpeed: number;
  setVoiceSpeed: (value: number) => void;
  voicePitch: number;
  setVoicePitch: (value: number) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [volume, setVolume] = useState<number>(1);
  const [voiceSpeed, setVoiceSpeed] = useState<number>(1);
  const [voicePitch, setVoicePitch] = useState<number>(1);

  return (
    <SettingsContext.Provider value={{ volume, setVolume, voiceSpeed, setVoiceSpeed, voicePitch, setVoicePitch }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
