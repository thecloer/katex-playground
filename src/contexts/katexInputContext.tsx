import { createContext, PropsWithChildren, useRef } from 'react';

type KatexInputContext = { katexInputRef: React.RefObject<HTMLTextAreaElement> };

export const KatexInputContext = createContext<KatexInputContext>({ katexInputRef: { current: null } });

export function KatexInputRefProvider({ children }: PropsWithChildren) {
  const katexInputRef = useRef<HTMLTextAreaElement>(null);
  return <KatexInputContext.Provider value={{ katexInputRef }}>{children}</KatexInputContext.Provider>;
}
