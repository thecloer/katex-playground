interface ToggleButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function ToggleButton({ isOpen, toggle }: ToggleButtonProps) {
  return (
    <button
      className='absolute top-2 right-2 w-8 h-8 p-1 flex items-center justify-center rounded-md border-2 border-teal-500 bg-white hover:bg-teal-400'
      onClick={toggle}
    >
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='h-full w-full'>
        {isOpen ? (
          <path d='M16 8L8 16M8 8L16 16' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
        ) : (
          <>
            <path d='M4 18L20 18' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
            <path d='M4 12L20 12' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
            <path d='M4 6L20 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
          </>
        )}
      </svg>
    </button>
  );
}
