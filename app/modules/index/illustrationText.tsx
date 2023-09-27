import { cn } from '~/lib/utils';

export interface IllustrationTextProps extends React.ComponentProps<'div'> {}

function IllustrationText({ className, children }: IllustrationTextProps) {
  return (
    <div
      className={cn(
        'text-3xl font-bold uppercase tracking-wide text-secondary supports-[-webkit-text-stroke:3px_hsl(var(--secondary))]:[-webkit-text-fill-color:white] supports-[-webkit-text-stroke:3px_hsl(var(--secondary))]:[-webkit-text-stroke:3px_hsl(var(--secondary))] md:text-6xl',
        className,
      )}
    >
      {children}
    </div>
  );
}

export { IllustrationText };
