export type FormattedText =
  | {
      text: string;
      format: 'LargeBold' | 'Bold' | 'Normal' | 'Link';
    }
  | 'NewLine';

export type TerminalContentTypePrompt = {
  type: 'prompt';
  content: FormattedText[];
};
export type TerminalContentTypeResponse = {
  type: 'response';
  content: FormattedText[];
};
export type TerminalContentType =
  | TerminalContentTypeResponse
  | TerminalContentTypePrompt;
