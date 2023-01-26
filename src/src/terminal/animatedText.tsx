import React, { useEffect, useRef, useState, useMemo } from 'react';
import { FormattedText } from './types';

type AnimatedTextProps = {
  text: FormattedText[];
  onComplete: () => void;
  textRenderer: (t: React.ReactElement) => React.ReactElement;
};

export const AnimatedText = (props: AnimatedTextProps) => {
  const [characterNumber, setCharacterNumber] = useState(0);
  const timer = useRef<null | NodeJS.Timer>(null);

  const totalCharacters = useMemo(() => {
    let total = 0;
    props.text.forEach((t) => {
      if (t !== 'NewLine') {
        total += t.text.length;
      }
    });
    return total;
  }, [props.text]);

  const timeoutLimit = totalCharacters > 50 ? 10 : 50;

  useEffect(() => {
    timer.current = setInterval(() => {
      setCharacterNumber((c) => c + 1);
    }, timeoutLimit);
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (characterNumber >= totalCharacters) {
      timer.current && clearInterval(timer.current);
      props.onComplete();
    }
  }, [characterNumber]);

  const partialText = buildPartialTextElement(props.text, characterNumber);

  return props.textRenderer(partialText);
};

export function buildPartialTextElement(
  text: FormattedText[],
  characterNumber?: number
) {
  let elements: React.ReactElement[] = [];
  let charactersLeft = characterNumber;
  for (const textElement of text) {
    if (charactersLeft && charactersLeft <= 0) {
      break;
    }
    if (textElement === 'NewLine') {
      elements.push(<br key={elements.length} />);
      continue;
    }
    if (
      charactersLeft == undefined ||
      textElement.text.length <= charactersLeft
    ) {
      if (textElement.format === 'Link') {
        elements.push(
          <a target="_blank" href={textElement.text} key={elements.length}>
            {textElement.text}
          </a>
        );
      } else {
        elements.push(
          <span key={elements.length} style={formatToStyle(textElement.format)}>
            {textElement.text}
          </span>
        );
      }
      if (charactersLeft !== undefined) {
        charactersLeft -= textElement.text.length;
      }
    } else {
      elements.push(
        <span key={elements.length} style={formatToStyle(textElement.format)}>
          {textElement.text.slice(0, charactersLeft)}
        </span>
      );
      charactersLeft = 0;
    }
  }
  return <>{elements}</>;
}

function formatToStyle(format: string): React.CSSProperties | undefined {
  if (format === 'LargeBold') {
    return {
      fontWeight: 'bold',
      fontSize: '1.2em'
    };
  }
  if (format === 'Bold') {
    return {
      fontWeight: 'bold'
    };
  }
  if (format === 'Underlined') {
    return {
      textDecorationLine: 'underline'
    };
  }
}
