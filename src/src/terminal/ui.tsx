import React, { useEffect, useRef, useState } from 'react';
import { AnimatedText, buildPartialTextElement } from './animatedText';
import { TerminalContentType } from './types';
import './ui.css';

type TerminalProps = {
  terminalContent: TerminalContentType[];
  onEnter: (t: string) => void;
  validCommands: string[];
};

const renderPrompt = (
  text: string | React.ReactElement,
  caret: { blinking: boolean } | false = false,
  style: 'valid' | 'invalid' | 'none' = 'none'
) => (
  <>
    <span style={{ color: '#00c200' }}>{'~ '}</span>
    <span>{'$ '}</span>
    <span className={style}>{text}</span>
    {caret && <span className={`caret ${caret.blinking && 'blinking'}`} />}
  </>
);

function Terminal(props: TerminalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const { terminalContent } = props;

  const waitingOnPrompt = currentLine === terminalContent.length;

  const focusInput = () => {
    inputRef.current?.focus();
    resetCaret();
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [waitingOnPrompt]);
  const resetCaret = () => {
    // We want to disable moving of the caret in our hidden input
    inputRef.current?.setSelectionRange(9999, 9999);
  };
  const inputKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (key) => {
    resetCaret();
    if (key.key === 'Enter') {
      if (inputRef.current) {
        submit(inputRef.current.value);
      }
    }
  };

  const submit = (text: string) => {
    setCurrentText('');
    props.onEnter(text);
  };

  return (
    <div className="terminalWrapper">
      <div className="menubar">
        <div className="icon close" />
        <div className="icon minimize" />
        <div className="icon expand" />
        <div className="terminalTitle">Leighton's Resume</div>
      </div>
      <div className="terminalBody" onClick={focusInput}>
        {terminalContent.map((text, index) => {
          if (index < currentLine) {
            return (
              <p key={index}>
                {text.type === 'prompt'
                  ? renderPrompt(buildPartialTextElement(text.content))
                  : buildPartialTextElement(text.content)}
              </p>
            );
          } else if (index === currentLine) {
            return (
              <p key={index}>
                <AnimatedText
                  text={text.content}
                  key={index}
                  textRenderer={
                    text.type === 'prompt'
                      ? renderPrompt
                      : (t: React.ReactElement) => <span>{t}</span>
                  }
                  onComplete={() => setCurrentLine(index + 1)}
                  onType={() => scrollToBottom()}
                />
              </p>
            );
          }
          return null;
        })}
        <>
          <p style={{ cursor: 'text' }}>
            {renderPrompt(
              currentText,
              waitingOnPrompt ? { blinking: true } : false,
              props.validCommands.includes(currentText) ? 'valid' : 'invalid'
            )}
          </p>
          <div className="hidden">
            <input
              ref={inputRef}
              autoFocus
              value={currentText}
              onKeyUp={inputKeyPress}
              onKeyDown={resetCaret}
              onChange={(e) => {
                if (waitingOnPrompt) {
                  setCurrentText(e.target.value);
                }
              }}
            />
          </div>
        </>
        {waitingOnPrompt && (
          <div className="bottomBar">
            {props.validCommands.map((c) => (
              <button
                onClick={() => submit(c)}
                key={c}
                className="bottomButton"
              >
                {c}
              </button>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Terminal;
