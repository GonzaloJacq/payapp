import type { ReactNode } from "react";

export const Body = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 items-center justify-center">{children}</div>
  );
};
