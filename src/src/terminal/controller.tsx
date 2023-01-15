import { useMemo, useState } from "react";
import TerminalUI from "./ui";

const InitialText: string[] = [
  "Welcome!",
  'Type type or click one of the buttons below',
];

const commandMap = [
  {
    key: "about",
    value: "todo",
  },
  {
    key: "education",
    value: "todo",
  },
  {
    key: "skills",
    value: "todo",
  },
  {
    key: "experience",
    value: "todo",
  },
  {
    key: "interests",
    value: "todo",
  },
  {
    key: "contact",
    value: "todo",
  },
];
function Terminal() {
  const [terminalContent, setTerminalContent] = useState(InitialText);

  const onEnter = (text: string) => {
    const response = commandMap.find((c) => c.key === text);
    if (response) {
      setTerminalContent([...terminalContent, response.key, response.value]);
    } else {
      setTerminalContent([...terminalContent, text, `Unknown command ${text}`]);
    }
  };
  const validCommands = useMemo(
    () =>
      commandMap.reduce((c, a) => {
        c.push(a.key);
        return c;
      }, [] as string[]),
    []
  );
  return (
    <TerminalUI
      validCommands={validCommands}
      terminalContent={terminalContent}
      onEnter={onEnter}
    />
  );
}

export default Terminal;
