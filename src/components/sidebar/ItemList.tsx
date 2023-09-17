import { useStorage } from '../../hooks/useStorage';
import Item from './Item';

export default function ItemList() {
  const storage = useStorage();
  return (
    <div className='mt-2 grow overflow-scroll flex flex-col gap-4'>
      {storage.get().map(({ id, data }) => (
        <Item key={id} id={id} text={data} />
      ))}
    </div>
  );
}
