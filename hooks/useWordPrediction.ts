import { useState, useEffect } from "react";
import modelData from "../assets/word-prediction/en_US.clean.trigrams.min.json";

interface Model {
  [context: string]: { [word: string]: number };
}

const model: Model = modelData as Model;

export function useWordPrediction(input: string) {
  const [predictions, setPredictions] = useState<string[]>([]);

  useEffect(() => {
    const words = input.trim().toLowerCase().split(" ");
    if (words.length < 2) {
      setPredictions([]);
      return;
    }

    const context = `${words[words.length - 2]} ${words[words.length - 1]}`;
    const options = model[context];

    if (options) {
      const sorted = Object.entries(options)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([word]) => word);
      setPredictions(sorted);
    } else {
      setPredictions([]);
    }
  }, [input]);

  return predictions;
}
