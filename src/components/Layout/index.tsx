import { floatingLayoutContainer, layoutContainer } from "./style";
import classNames from "classnames";

export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames(layoutContainer, className)}>{children}</div>
  );
};

export const FloatingLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames(floatingLayoutContainer, className)}>
      {children}
    </div>
  );
};
