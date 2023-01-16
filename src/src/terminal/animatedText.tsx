import React, { useEffect, useRef, useState } from "react";

type AnimatedTextProps = {
  text: string;
  textRenderer: (t: string) => React.ReactElement;
  onComplete: () => void;
};

export const AnimatedText = (props: AnimatedTextProps) => {
  const [characterNumber, setCharacterNumber] = useState(0);
  const timer = useRef<null | NodeJS.Timer>(null);

  const timeoutLimit = props.text.length > 50 ? 10 : 50;

  useEffect(() => {
    timer.current = setInterval(() => {
      setCharacterNumber((c) => c + 1);
    }, timeoutLimit);
    return () => {timer.current && clearInterval(timer.current)};
  }, []);

  useEffect(() => {
    if (characterNumber >= props.text.length) {
        timer.current && clearInterval(timer.current);
        props.onComplete();
    }
  }, [characterNumber]);

  return props.textRenderer(props.text.slice(undefined, characterNumber));
};
