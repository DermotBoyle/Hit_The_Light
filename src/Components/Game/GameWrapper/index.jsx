import React, { useState, useEffect } from "react";
import EndGamePortal from "../../EndGame/index";
import { Wrapper, PlayBox, Timer } from "../../../StyledComponents/index";
import useColorGenerator from "./hooks/useColorGenerator";

const initalSeconds = 34;

export default function GameWrapper() {
  const { getRandomColor, getRandomPlayBox } = useColorGenerator();

  const [level, setLevel] = useState(4);
  const [randomColor, setRandomColor] = useState("");
  const [chosenPlaybox, setChosenPlayBox] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [seconds, setSeconds] = useState(initalSeconds);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let color = getRandomColor();
    let num = getRandomPlayBox(0, level);
    setChosenPlayBox(num);
    setRandomColor(color);
    setSeconds(initalSeconds - level);

  }, [level]);

  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds === 0) {
        setIsOpen(true);
        clearInterval(timer);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  function handleProgress(index) {
    if (index === chosenPlaybox) {
      setScore( score + seconds * level)
      setLevel(level + 1);
    } else {
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
     <Timer> Time : {seconds}</Timer>
      <Wrapper templateSize={level}>
        {Array(level * level)
          .fill("box")
          .map((_, index) => {
            return (
              <PlayBox
                key={index}
                color={randomColor}
                saturate={index === chosenPlaybox ? "100%" : "50%"}
                onClick={() => handleProgress(index)}
              />
            );
          })}
      </Wrapper>
      <EndGamePortal closeModal={closeModal} modalIsOpen={modalIsOpen} score={score} />
    </>
  );
}
