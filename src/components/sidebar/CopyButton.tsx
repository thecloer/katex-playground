export default function CopyButton({ text }: { text: string }) {
  const copyItem = () => navigator.clipboard.writeText(text);

  return (
    <button
      aria-label='Copy item'
      onClick={copyItem}
      className='flex justify-center items-center w-6 h-6 rounded hover:text-white hover:bg-gray-600'
    >
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-5 h-5'>
        <path
          d='M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H7Z'
          fill='currentColor'
        />
        <path
          d='M6 12C6 11.4477 6.44772 11 7 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H7C6.44772 13 6 12.5523 6 12Z'
          fill='currentColor'
        />
        <path
          d='M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H7Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.625 3H7.03369C7.71014 2.37135 8.6473 2 9.62497 2H18.375C20.263 2 22 3.38491 22 5.33333V14.6667C22 16.6151 20.263 18 18.375 18H17.94C17.631 19.697 16.1637 21 14.375 21H5.625C3.60818 21 2 19.3435 2 17.3333V6.66667C2 4.65653 3.60818 3 5.625 3ZM18.375 16H18V6.66667C18 5.62093 17.5648 4.67089 16.8632 4H18.375C19.3864 4 20 4.70443 20 5.33333V14.6667C20 15.2956 19.3864 16 18.375 16ZM5.625 5C4.74233 5 4 5.73129 4 6.66667V17.3333C4 18.2687 4.74233 19 5.625 19H14.375C15.2577 19 16 18.2687 16 17.3333V6.66667C16 5.73129 15.2577 5 14.375 5H5.625Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}
