export default function NavLink({ text, url }: { text: string; url: string }) {
  return (
    <a href={url} target='_blank' className='text-xl font-semibold text-gray-700 hover:text-teal-600'>
      {text}
    </a>
  );
}
