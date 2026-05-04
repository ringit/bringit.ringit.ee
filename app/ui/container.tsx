import type { ElementType } from 'react';

import { cn } from '~/lib/utils';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  as?: ElementType;
}

function Container({ children, as: Tag = 'div', className }: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-200', className)}>{children}</Tag>
  );
}

export { Container };
