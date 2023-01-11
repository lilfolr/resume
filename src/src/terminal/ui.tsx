import { useState } from "react";
import { Keyframes, Frame } from "./react-keyframe";
import "./ui.css";

type TerminalProps = {
  terminalContent: String[];
};

const sleepDuration = 300;
const getTypingDuration = () => 40 + 80 * (Math.random() - 0.5);

const renderText = (text: String, caret: {blinking: boolean}|false = false) => (
  <>
    <span style={{ color: "#00c200" }}>{"~ "}</span>
    <span>{"$ "}</span>
    <span>{text}</span>
    {caret && <span className={`caret ${caret.blinking && "blinking"}`} />}
  </>
);

const renderLine = (text: String, key: number, onComplete: () => void) => {
  const frames = [];

  // starting frame
  frames.push(<Frame duration={sleepDuration} key={`${text}-first`}></Frame>);

  // typing out the line
  for (let i = 0; i < text.length; i++) {
    const isLastLetter = i === text.length - 1;
    const duration = isLastLetter ? sleepDuration : getTypingDuration();
    frames.push(
      <Frame duration={duration} key={`${text}-${i}`}>
        {renderText(text.slice(0, i + 1), {blinking: false})}
      </Frame>
    );
  }

  // ending frame
  frames.push(<Frame key={`${text}-last`}>{renderText(text, {blinking: false})}</Frame>);

  return (
    <Keyframes component="p" key={key} onEnd={onComplete}>
      {frames}
    </Keyframes>
  );
};

function Terminal(props: TerminalProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const { terminalContent } = props;

  console.log("CurrentLine", currentLine);

  return (
    <div className="terminalWrapper">
      <div className="menubar">
        <div className="icon close" />
        <div className="icon minimize" />
        <div className="icon expand" />
      </div>
      <div className="terminalBody">
        {terminalContent.map((text, index) => {
          if (index < currentLine) {
            return <p key={index}>{renderText(text)}</p>;
          } else if (index == currentLine) {
            return renderLine(text, index, () => setCurrentLine((i) => i + 1));
          }
        })}
        {currentLine === terminalContent.length && <p>{renderText("", {blinking: true})}</p>}
      </div>
    </div>
  );
}

export default Terminal;
