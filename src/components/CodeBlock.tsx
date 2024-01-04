import { useTheme } from 'next-themes';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeHighligher({
  lang,
  code,
}: {
  lang: string;
  code: string;
}) {
  const { theme } = useTheme();

  return (
    <SyntaxHighlighter
      language={lang}
      style={theme === 'light' ? oneLight : oneDark}
      customStyle={{
        padding: 20,
        fontSize: 15,
        fontFamily: 'var(--font-family)',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
