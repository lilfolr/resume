import React, { useEffect, useRef, useState, useMemo } from 'react';
import { FormattedText } from './types';

type AnimatedTextProps = {
  text: FormattedText[];
  onComplete: () => void;
  onType: () => void;
  textRenderer: (t: React.ReactElement) => React.ReactElement;
};

export const AnimatedText = (props: AnimatedTextProps) => {
  const [characterNumber, setCharacterNumber] = useState(0);
  const timer = useRef<null | NodeJS.Timer>(null);

  const { onType, onComplete, text } = props;

  const totalCharacters = useMemo(() => {
    let total = 0;
    text.forEach((t) => {
      if (t !== 'NewLine') {
        total += t.text.length;
      }
    });
    return total;
  }, [text]);

  let timeoutLimit = 50;
  if (totalCharacters > 50) {
    timeoutLimit = 10;
  } else if (totalCharacters > 200) {
    timeoutLimit = 5;
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      setCharacterNumber((c) => c + 1);
      onType();
    }, timeoutLimit);
    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, [timeoutLimit, onType]);

  useEffect(() => {
    if (characterNumber >= totalCharacters) {
      timer.current && clearInterval(timer.current);
      onComplete();
    }
  }, [characterNumber, totalCharacters, onComplete]);

  const partialText = buildPartialTextElement(text, characterNumber);

  return props.textRenderer(partialText);
};

export function buildPartialTextElement(
  text: FormattedText[],
  characterNumber?: number
) {
  const elements: React.ReactElement[] = [];
  let charactersLeft = characterNumber;
  console.group();
  for (const textElement of text) {
    if (charactersLeft !== undefined && charactersLeft <= 0) {
      break;
    }
    if (textElement === 'NewLine') {
      elements.push(<br key={elements.length} />);
      continue;
    }
    if (
      charactersLeft === undefined ||
      textElement.text.length <= charactersLeft
    ) {
      if (textElement.format === 'Link') {
        elements.push(
          <a
            target="_blank"
            href={textElement.text}
            key={elements.length}
            rel="noreferrer"
          >
            {textElement.text}
          </a>
        );
      } else {
        console.log('Pushed', textElement.text);
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
      console.log('Pushed', textElement.text.slice(0, charactersLeft));
      elements.push(
        <span key={elements.length} style={formatToStyle(textElement.format)}>
          {textElement.text.slice(0, charactersLeft)}
        </span>
      );
      charactersLeft = 0;
    }
  }
  console.groupEnd();
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
