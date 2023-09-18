import { StorageItem, StorageItemSchema } from '../contexts/storageContext';
import { KATEX_STORAGE_KEY, URI_DATA_KEY } from '../settings/config';

export const parseStringToStorageData = (rawData: string | null) => {
  if (rawData) {
    const parsed = JSON.parse(rawData);
    if (Array.isArray(parsed)) {
      return parsed.reduce((acc: StorageItem[], element) => {
        const parsedItem = StorageItemSchema.safeParse(element);
        return parsedItem.success ? [...acc, parsedItem.data] : acc;
      }, []);
    }
  }
  return [];
};

export const updateLocalStorage = (data: StorageItem[]) => {
  localStorage.setItem(KATEX_STORAGE_KEY, JSON.stringify(data));
  return data;
};

export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

export const generateShareLink = (data: unknown) => {
  const stringifiedData = JSON.stringify(data);
  const encodedData = encodeURIComponent(stringifiedData);
  const url = new URL(location.pathname, location.origin);
  url.searchParams.set(URI_DATA_KEY, encodedData);
  return url;
};

export const getDataFromURI = () => {
  new URLSearchParams(location.search).get(URI_DATA_KEY);
  const url = new URL(location.href);
  const encodedData = url.searchParams.get(URI_DATA_KEY);
  if (!encodedData) return [];
  const decodedData = decodeURIComponent(encodedData);
  return parseStringToStorageData(decodedData);
};
