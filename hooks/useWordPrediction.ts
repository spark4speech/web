import { useState } from "react";
import modelData from "../assets/word-prediction/en_US.clean.trigrams.min.json";

interface Model {
  [context: string]: { [word: string]: number };
}

const model: Model = modelData as Model;

export function useWordPrediction() {
  const [predictions, setPredictions] = useState<string[]>([]);

  const predictNextWords = (input: string, topN: number = 5) => {
    const words = input.trim().toLowerCase().split(" ");
    if (words.length < 2) return setPredictions([]);

    const context = `${words[words.length - 2]} ${words[words.length - 1]}`;
    const predictionData = model[context] ?? {};

    const sortedPredictions = Object.entries(predictionData)
      .sort(([, countA], [, countB]) => countB - countA)
      .slice(0, topN)
      .map(([word]) => word);

    setPredictions(sortedPredictions);
  }

  return { predictions, predictNextWords };
}
