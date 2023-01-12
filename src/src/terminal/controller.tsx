import { useState } from "react";
import TerminalUI from "./ui";

const InitialText = [
  "Welcome!",
  'Type "help" for a list of available commands - or click one of the buttons below',
];
function Terminal() {
  const [terminalContent, setTerminalContent] = useState(InitialText);

  const onEnter = (text: String) => {};
  return <TerminalUI terminalContent={terminalContent} onEnter={onEnter} />;
}

export default Terminal;
