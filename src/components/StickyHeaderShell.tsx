import type { ReactNode } from "react";

interface StickyHeaderShellProps {
  children: ReactNode;
}

/** Header sticky sem overlays promocionais. */
const StickyHeaderShell = ({ children }: StickyHeaderShellProps) => (
  <div className="sticky top-0 z-50 bg-background shadow-sm">
    {children}
  </div>
);

export default StickyHeaderShell;
