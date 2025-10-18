import { layoutContainer, layoutContent } from "./style";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={layoutContainer}>
      <div className={layoutContent}>{children}</div>
    </div>
  );
};
