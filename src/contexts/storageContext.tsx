import { createContext, PropsWithChildren, useState } from 'react';
import { z } from 'zod';

const MAX_STORAGE_SIZE = 100;
const KATEX_STORAGE_KEY = 'cloer-katex-playground';

const StorageItemSchema = z.object({
  id: z.string(),
  data: z.string(),
});
export type StorageItem = z.infer<typeof StorageItemSchema>;

const cacheInitializer = () => {
  const raw = localStorage.getItem(KATEX_STORAGE_KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.reduce((acc: StorageItem[], element) => {
        const parsedItem = StorageItemSchema.safeParse(element);
        return parsedItem.success ? [...acc, parsedItem.data] : acc;
      }, []);
    }
  }
  return [];
};

type Storage = {
  get: () => StorageItem[];
  set: (id: string, data?: string) => void;
  isFull: () => boolean;
};
const initStorage: Storage = { get: () => [], set: () => {}, isFull: () => false };

export const StorageContext = createContext<Storage>(initStorage);

export function StorageProvider({ children }: PropsWithChildren) {
  const [cache, setCache] = useState<StorageItem[]>(cacheInitializer);

  const updateLocalStorage = (cache: StorageItem[]) => {
    localStorage.setItem(KATEX_STORAGE_KEY, JSON.stringify(cache));
    return cache;
  };

  const isFull = () => cache.length >= MAX_STORAGE_SIZE;
  const get = () => cache;
  const set = (id: string, data?: string) => {
    if (data) setCache((prev) => updateLocalStorage([{ id, data }, ...prev]));
    else setCache((prev) => updateLocalStorage(prev.filter((element) => element.id !== id)));
  };

  return <StorageContext.Provider value={{ get, set, isFull }}>{children}</StorageContext.Provider>;
}
