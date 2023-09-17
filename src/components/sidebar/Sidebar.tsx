import { useState } from 'react';
import ToggleButton from './ToggleButton';
import SaveButton from './SaveButton';
import ItemList from './ItemList';
import { StorageProvider } from '../../contexts/storageContext';
import ShareButton from './ShareButton';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <>
      <aside
        className={`absolute top-0 bottom-0 right-0 flex flex-col
        p-2 w-72 border-l-2 bg-gray-100 
        transition ease-in-out ${isOpen ? '' : 'translate-x-full'}`}
      >
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
