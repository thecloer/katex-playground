import { z } from 'zod';

export const StorageItemSchema = z.object({
  id: z.string(),
  data: z.string(),
});
export type StorageItem = z.infer<typeof StorageItemSchema>;
