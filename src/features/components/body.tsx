import type { ReactNode } from "react";

export const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-4">
      {children}
    </div>
  );
};
