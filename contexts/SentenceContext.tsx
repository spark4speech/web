import React, { createContext, useState, ReactNode } from "react";

interface SentenceContextType {
  sentence: string;
  setSentence: (sentence: string) => void;
}

export const SentenceContext = createContext<SentenceContextType>({
  sentence: "",
  setSentence: () => {
    console.error("setSentence function not initialized!");
  },
});

export const SentenceProvider = ({ children }: { children: ReactNode }) => {
  const [sentence, setSentence] = useState<string>("");

  const updateSentence = (newSentence: string) => {
    setSentence(newSentence.charAt(0).toUpperCase() + newSentence.slice(1).toLowerCase());
  };

  return (
    <SentenceContext.Provider value={{ sentence, setSentence: updateSentence }}>
      {children}
    </SentenceContext.Provider>
  );
};
