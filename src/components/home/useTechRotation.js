import { useEffect, useState } from "react";

import techData from "./techData";

const VISIBLE_TECHS = 4;

const shuffleArray = (array) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {

    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [newArray[i], newArray[j]] = [
      newArray[j],
      newArray[i],
    ];
  }

  return newArray;
};

const getRandomTechs = (previous = []) => {

  let shuffled = shuffleArray(techData);

  let selected = shuffled
    .filter(
      (item) =>
        !previous.some(
          (prev) => prev.id === item.id
        )
    )
    .slice(0, VISIBLE_TECHS);

  if (selected.length < VISIBLE_TECHS) {

    shuffled = shuffleArray(techData);

    selected = shuffled.slice(0, VISIBLE_TECHS);
  }

  return selected;
};

const useTechRotation = () => {

  const [techs, setTechs] = useState(() =>
    getRandomTechs()
  );

  useEffect(() => {

    const interval = setInterval(() => {

      setTechs((prev) =>
        getRandomTechs(prev)
      );

    }, 2500);

    return () =>
      clearInterval(interval);

  }, []);

  return techs;
};

export default useTechRotation;