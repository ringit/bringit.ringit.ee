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
        text-secondary
        supports-[-webkit-text-fill-color:hsl(var(--white))]:[-webkit-text-fill-color:hsl(var(--white))]
        supports-[-webkit-text-stroke:1px_hsl(var(--secondary))]:[-webkit-text-stroke:1px_hsl(var(--secondary))]
        md:text-6xl
        md:supports-[-webkit-text-stroke:3px_hsl(var(--secondary))]:[-webkit-text-stroke:3px_hsl(var(--secondary))]`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export { IllustrationText };
