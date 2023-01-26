import { useMemo, useState } from 'react';
import { about, education, interests, profiles } from './content';
import { TerminalContentType, TerminalContentTypePrompt } from './types';
import TerminalUI from './ui';

const InitialText: TerminalContentTypePrompt[] = [
  { type: 'prompt', content: [{ text: 'Welcome!', format: 'Normal' }] },
  {
    type: 'prompt',
    content: [
      { text: 'Type or click one of the buttons below', format: 'Normal' }
    ]
  }
];

const commandMap: { key: string; value: TerminalContentType }[] = [
  {
    key: 'about',
    value: about
  },
  {
    key: 'education',
    value: education
  },
  // {
  //   key: "skills",
  //   value: "todo",
  // },
  // {
  //   key: "experience",
  //   value: "todo",
  // },
  {
    key: "interests",
    value: interests,
  },
  {
    key: 'profiles',
    value: profiles
  }
];
function Terminal() {
  const [terminalContent, setTerminalContent] =
    useState<TerminalContentType[]>(InitialText);

  const onEnter = (text: string) => {
    const response = commandMap.find((c) => c.key === text);
    if (response) {
      setTerminalContent([
        ...terminalContent,
        { type: 'prompt', content: [{ format: 'Normal', text: response.key }] },
        response.value
      ]);
    } else {
      setTerminalContent([
        ...terminalContent,
        { type: 'prompt', content: [{ format: 'Normal', text: text }] },
        {
          type: 'response',
          content: [{ format: 'Normal', text: `Unknown command ${text}` }]
        }
      ]);
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
