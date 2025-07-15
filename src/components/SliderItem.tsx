import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const SliderItem: FC<Props> = ({ children, className }) => {
  return <div className={`flex-shrink-0 flex-grow-0 ${className}`}>{children}</div>;
};
