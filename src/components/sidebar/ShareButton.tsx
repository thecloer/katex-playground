import { copyToClipboard, generateShareLink } from '../../helper/helpers';
import { useStorage } from '../../hooks/useStorage';

export default function ShareButton() {
  const storage = useStorage();

  const copySharableLink = () => {
    const data = storage.get();
    const link = generateShareLink(data);
    history.pushState(null, '', link);
    copyToClipboard(link.toString());
  };

  return (
    <button
      onClick={copySharableLink}
      className='flex items-center justify-center text-sm capitalize bg-teal-500 h-8 py-1 px-2 rounded-md tracking-wide text-white hover:bg-teal-600'
    >
      copy share link
    </button>
  );
}
