import { useContext, useRef } from 'react';
import { KatexInputContext } from '../contexts/katexInputContext';

declare global {
  function renderMathInElement(element: HTMLElement, options?: unknown): void;
}

export default function Content() {
  const { katexInputRef } = useContext(KatexInputContext);
  // const inputRef = useRef<HTMLTextAreaElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const onInputChange = () => {
    if (!(outputRef.current && katexInputRef.current)) return;
    outputRef.current.innerHTML = katexInputRef.current.value;
    renderMathInElement?.(outputRef.current, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
      throwOnError: false,
    });
  };
  return (
    <main className='container mx-auto h-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-3'>
      <section className='bordered-box-container'>
        <label htmlFor='input-textarea' className='bordered-box-label'>
          input
        </label>
        <textarea
          ref={katexInputRef}
          id='input-textarea'
          placeholder='Write your math in KaTeX syntax here...'
          className='bordered-box tracking-wider'
          onChange={onInputChange}
        />
      </section>
      <section className='bordered-box-container'>
        <label className='bordered-box-label'>output</label>
        <div ref={outputRef} className='bordered-box' />
      </section>
    </main>
  );
}
