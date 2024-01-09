'use client';

import React from 'react';
import { BiClipboard } from 'react-icons/bi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
export type CodeBlockProps = {
  language: string;
  code: string;
  filename?: string;
};
export function CodeBlock({ code, filename, language }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const onClickCopy = React.useCallback(() => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setHasCopied(true);
        setTimeout(() => {
          setHasCopied(false);
        }, 3000);
      })
      .catch(() => {
        console.error('Failed to copy code block');
      });
  }, [code]);

  return (
    <div className='group relative mr-3 rounded-3xl border border-zinc-200 md:mr-0 dark:border-zinc-200/10 dark:bg-zinc-800/80'>
      <div className='relative flex text-xs leading-6 text-slate-400'>
        {Boolean(filename) && (
          <>
            <div className='mt-2 flex flex-none items-center border-b border-t border-b-emerald-700 border-t-transparent px-4 py-1 font-medium text-emerald-700 dark:border-b-emerald-200 dark:text-emerald-200'>
              {filename}
            </div>
            <div className='flex flex-auto overflow-hidden rounded-tr-3xl pt-2'>
              <div className='-mr-px flex-auto rounded-tl border border-zinc-300/40 bg-zinc-200/50 dark:border-zinc-500/30 dark:bg-zinc-700/50' />
            </div>
          </>
        )}
        <div className='absolute right-0 top-2 flex h-8 items-center pr-4'>
          <div className='relative -mr-0.5 flex'>
            {/* <ElegantTooltip content="复制"> */}
            <button
              type='button'
              className='text-zinc-400 hover:text-zinc-500 dark:text-zinc-500 dark:hover:text-zinc-400'
              onClick={onClickCopy}
            >
              {hasCopied ? (
                <BiClipboard className='h-5 w-5' />
              ) : (
                <BiClipboard className='h-5 w-5' />
              )}
            </button>
            {/* </ElegantTooltip> */}
          </div>
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        showLineNumbers
        useInlineStyles={false}
        // codeTagProps={{
        //   style: {},
        //   className: `language-${language}`,
        // }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
