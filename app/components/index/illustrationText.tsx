import { cn } from '~/lib/utils';

export interface IllustrationTextProps extends React.ComponentProps<'div'> {}

function IllustrationText({ className, children }: IllustrationTextProps) {
  return (
    <div
      className={cn(
        'uppercase font-bold text-4xl md:text-6xl tracking-wide supports-[-webkit-text-stroke:3px_hsl(var(--secondary))]:[-webkit-text-fill-color:white] supports-[-webkit-text-stroke:3px_hsl(var(--secondary))]:[-webkit-text-stroke:3px_hsl(var(--secondary))]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export { IllustrationText };
