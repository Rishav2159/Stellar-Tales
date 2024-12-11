import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number;       // Size of the pattern (width of each tile)
  height?: number;      // Size of the pattern (height of each tile)
  x?: number;           // X offset for the pattern
  y?: number;           // Y offset for the pattern
  cx?: number;          // X center of the circle in the pattern
  cy?: number;          // Y center of the circle in the pattern
  cr?: number;          // Radius of the circle
  className?: string;   // Optional CSS classes
  [key: string]: unknown; // For any other props passed to the SVG element
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 8,  // Default center X
  cy = 8,  // Default center Y
  cr = 3,  // Default circle radius
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
