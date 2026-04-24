import type { ElementType } from 'react';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  as?: ElementType;
}

function Container({ children, as: Tag = 'div' }: ContainerProps) {
  return <Tag className="mx-auto w-full max-w-200">{children}</Tag>;
}

export { Container };
