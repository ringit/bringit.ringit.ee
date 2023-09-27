import { cn } from '~/lib/utils';

export interface IllustrationTextProps
  extends React.HTMLProps<HTMLDivElement> {}

function IllustrationText({ className, children }: IllustrationTextProps) {
  return (
    <div
      className={cn(
        `text-3xl
        font-bold
        uppercase
        tracking-wide
        supports-[-webkit-text-stroke:3px_hsl(var(--secondary))]:[-webkit-text-stroke:3px_hsl(var(--secondary))]
        md:text-6xl`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export { IllustrationText };
