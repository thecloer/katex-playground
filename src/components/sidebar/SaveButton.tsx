import { useContext } from 'react';
import { KatexInputContext } from '../../contexts/katexInputContext';
import { useStorage } from '../../hooks/useStorage';

export default function SaveButton() {
  const { katexInputRef } = useContext(KatexInputContext);
  const storage = useStorage();

  const addItem = () => {
    const input = katexInputRef.current?.value;
    if (!storage.isFull() && input) storage.set(crypto.randomUUID(), input);
  };

  return (
    <button
      disabled={storage.isFull()}
      onClick={addItem}
      className='flex items-center justify-center text-sm capitalize bg-teal-500 h-8 py-1 px-2 rounded-md tracking-wide text-white hover:bg-teal-600'
    >
      save
    </button>
  );
}
