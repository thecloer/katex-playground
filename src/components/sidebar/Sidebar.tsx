import { MouseEventHandler, useState } from 'react';
import ToggleButton from './ToggleButton';
import SaveButton from './SaveButton';
import ItemList from './ItemList';
import { StorageProvider } from '../../contexts/storageContext';
import ShareButton from './ShareButton';

const MIN_WIDTH = 288;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((v) => !v);

  const dragHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.currentTarget.parentElement;
    if (!target) return;

    const resize: EventListener = (e) => {
      const right = target.getBoundingClientRect().left + target.getBoundingClientRect().width;
      const left = (e as MouseEvent).clientX;
      const width = Math.max(MIN_WIDTH, right - left);
      target.style.width = `${width}px`;
    };

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', () => document.removeEventListener('mousemove', resize), { once: true });
  };

  return (
    <>
      <aside
        className={`absolute top-0 bottom-0 right-0 flex flex-col overflow-hidden
        p-2 w-72 border-l-2 bg-gray-100 
        transition ease-in-out ${isOpen ? '' : 'translate-x-full'}`}
      >
        <div className='absolute top-0 bottom-0 w-2 cursor-col-resize left-0' onMouseDown={dragHandler} />
        <StorageProvider>
          <div className='flex gap-2 mr-10'>
            <SaveButton />
            <ShareButton />
          </div>
          <ItemList />
        </StorageProvider>
      </aside>

      <ToggleButton isOpen={isOpen} toggle={toggle} />
    </>
  );
}
