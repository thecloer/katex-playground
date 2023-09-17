import { useStorage } from '../../hooks/useStorage';

export default function DeleteButton({ id }: { id: string }) {
  const storage = useStorage();
  const deleteItem = () => storage.set(id);

  return (
    <button
      aria-label='Delete item'
      onClick={deleteItem}
      className='flex justify-center items-center w-6 h-6 rounded text-red-600 hover:bg-red-500 hover:text-white'
    >
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5'>
        <path
          d='M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z'
          stroke='currentColor'
          strokeWidth='2'
        />
        <path d='M19.5 5H4.5' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z' stroke='currentColor' strokeWidth='2' />
        <path d='M14 12V17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        <path d='M10 12V17' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      </svg>
    </button>
  );
}