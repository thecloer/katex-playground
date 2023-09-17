import { useContext } from 'react';
import { StorageContext } from '../contexts/storageContext';

export const useStorage = () => useContext(StorageContext);
