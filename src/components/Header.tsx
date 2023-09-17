import { useEffect, useRef } from 'react';
import katex from 'katex';

export default function Header() {
  const titleRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.innerHTML = katex.renderToString(`\\KaTeX`, {
        throwOnError: false,
      });
    }
  }, []);
  return (
    <header className='border-b-2'>
      <div className='container mx-auto px-4 my-6 flex items-center justify-between'>
        <div className='flex gap-2'>
          <span ref={titleRef} className='text-4xl' />
          <a href='https://github.com/thecloer' className='self-end text-sm text-gray-500 hover:text-teal-700'>
            &copy;thecloer
          </a>
        </div>
        <div>
          <a
            href='https://katex.org/docs/supported'
            target='_blank'
            className='text-xl font-semibold text-gray-700 hover:text-teal-600'
          >
            Docs
          </a>
        </div>
      </div>
    </header>
  );
}
