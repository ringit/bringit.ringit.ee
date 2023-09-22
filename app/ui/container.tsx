import { type ElementType, type ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
}

function Container({ children, as: Tag = 'div' }: ContainerProps) {
  return <Tag className="max-w-[56.25rem] mx-auto w-full">{children}</Tag>;
}

export { Container };
