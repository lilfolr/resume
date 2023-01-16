import { useRef, useState } from "react";
import { AnimatedText } from "./animatedText";
import "./ui.css";

type TerminalProps = {
  terminalContent: string[];
  onEnter: (t: string) => void;
  validCommands: string[];
};

const renderText = (
  text: string,
  caret: { blinking: boolean } | false = false,
  style: "valid" | "invalid" | "none" = "none"
) => (
  <>
    <span style={{ color: "#00c200" }}>{"~ "}</span>
    <span>{"$ "}</span>
    <span className={style}>{text}</span>
    {caret && <span className={`caret ${caret.blinking && "blinking"}`} />}
  </>
);

function Terminal(props: TerminalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const { terminalContent } = props;

  const focusInput = () => {
    inputRef.current?.focus();
    resetCaret();
  };
  const resetCaret = () => {
    // We want to disable moving of the caret in our hidden input
    inputRef.current?.setSelectionRange(9999, 9999);
  };
  const inputKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (key) => {
    resetCaret();
    if (key.key === "Enter") {
      inputRef.current?.value && submit(inputRef.current!.value);
    }
  };

  const submit = (text: string) => {
    setCurrentText("");
    props.onEnter(text);
  };

  const waitingOnPrompt = currentLine === terminalContent.length;
  return (
    <div className="terminalWrapper">
      <div className="menubar">
        <div className="icon close" />
        <div className="icon minimize" />
        <div className="icon expand" />
      </div>
      <div className="terminalBody" onClick={focusInput}>
        {terminalContent.map((text, index) => {
          if (index < currentLine) {
            return <p key={index}>{renderText(text)}</p>;
          } else if (index === currentLine) {
            return <p key={index} ><AnimatedText text={text} key={index} textRenderer={renderText} onComplete={() => setCurrentLine(index + 1)} /></p>
          }
          return null;
        })}
        <>
          <p style={{ cursor: "text" }}>
            {renderText(
              currentText,
              waitingOnPrompt ? { blinking: true } : false,
              props.validCommands.includes(currentText) ? "valid" : "invalid"
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
      </div>
    </div>
  );
}

export default Terminal;
