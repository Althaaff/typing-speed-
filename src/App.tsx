import React from "react";
import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Result";
import UserTypings from "./components/UserTypings";
import useEngine from "./hooks/UseEngine";
import { calculatedAccuracyPercentage } from "./utils/helpers";

// const words = faker.random.words(10);

function App() {
  const { state, words, timeLeft, typed, errors, restart, totalTyped }  = useEngine();
  

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings className="absolute inset-0" userInput={typed} words={words} />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculatedAccuracyPercentage(errors, totalTyped)}
        total={totalTyped} 
      />
    </>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  )
}

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className="text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
