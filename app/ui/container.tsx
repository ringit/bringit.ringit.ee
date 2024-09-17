import { type ElementType, type ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
}

function Container({ children, as: Tag = 'div' }: ContainerProps) {
  return <Tag className="mx-auto w-full max-w-[50rem]">{children}</Tag>;
}

export { Container };
