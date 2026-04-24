import { cn } from '~/lib/utils';

function IllustrationText({
  className,
  children,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        `text-secondary text-3xl font-bold tracking-wide uppercase supports-[-webkit-text-fill-color:hsl(var(--white))]:[-webkit-text-fill-color:hsl(var(--white))] supports-[-webkit-text-stroke:1px_hsl(var(--secondary))]:[-webkit-text-stroke:1px_hsl(var(--secondary))] md:text-6xl md:supports-[-webkit-text-stroke:3px_hsl(var(--secondary))]:[-webkit-text-stroke:3px_hsl(var(--secondary))]`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export { IllustrationText };
