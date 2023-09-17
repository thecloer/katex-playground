import { useContext } from 'react';
import { StorageContext } from '../contexts/storageConext';

export const useStorage = () => useContext(StorageContext);
