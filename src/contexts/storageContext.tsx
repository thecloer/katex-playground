import { createContext, PropsWithChildren, useState } from 'react';
import { z } from 'zod';
import { getDataFromURI, parseStringToStorageData, updateLocalStorage } from '../helper/helpers';
import { KATEX_STORAGE_KEY, MAX_STORAGE_SIZE } from '../settings/config';

export const StorageItemSchema = z.object({
  id: z.string(),
  data: z.string(),
});
export type StorageItem = z.infer<typeof StorageItemSchema>;

const storageInitializer = () => {
  const raw = localStorage.getItem(KATEX_STORAGE_KEY);
  const dataFromLocalStorage = parseStringToStorageData(raw);
  const dataFromURI = getDataFromURI();
  const removedDuplicates = dataFromURI.filter((element) => !dataFromLocalStorage.some((e) => e.id === element.id));
  return updateLocalStorage([...removedDuplicates, ...dataFromLocalStorage]);
};

type Storage = {
  get: () => StorageItem[];
  set: (id: string, data?: string) => void;
  isFull: () => boolean;
};
const initStorage: Storage = { get: () => [], set: () => {}, isFull: () => false };

export const StorageContext = createContext<Storage>(initStorage);

export function StorageProvider({ children }: PropsWithChildren) {
  const [cache, setCache] = useState<StorageItem[]>(storageInitializer);

  const isFull = () => cache.length >= MAX_STORAGE_SIZE;
  const get = () => cache;
  const set = (id: string, data?: string) => {
    if (data) setCache((prev) => updateLocalStorage([{ id, data }, ...prev]));
    else setCache((prev) => updateLocalStorage(prev.filter((element) => element.id !== id)));
  };

  return <StorageContext.Provider value={{ get, set, isFull }}>{children}</StorageContext.Provider>;
}
