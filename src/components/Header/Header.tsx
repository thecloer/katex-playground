import { useEffect, useRef } from 'react';
import katex from 'katex';
import NavBar from './NavBar';
import { AUTHOR } from '../../settings/config';

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
          <a href={AUTHOR.github} className='self-end text-sm text-gray-500 hover:text-teal-700' target='_blank'>
            &copy;{AUTHOR.nickname}
          </a>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
