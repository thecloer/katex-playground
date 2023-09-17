import React, { useEffect, useRef } from 'react';
import CopyButton from './CopyButton';
import DeleteButton from './DeleteButton';
const Item = React.memo(function Item({ id, text }: { id: string; text: string }) {
  const itemTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemTextRef.current) return;
    itemTextRef.current.innerHTML = text;
    renderMathInElement?.(itemTextRef.current, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
      throwOnError: false,
    });
  }, [text]);

  return (
    <div className='flex flex-col bg-white rounded-md p-2 pb-1'>
      <div className='mb-1' ref={itemTextRef} />
      <div className='flex'>
        <CopyButton text={text} />
        <DeleteButton id={id} />
      </div>
    </div>
  );
});

export default Item;
