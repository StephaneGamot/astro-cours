import * as React from "react";
import { ASTRO_GLYPHS, type AstroGlyphName } from "./glyphs";

type Props = React.SVGProps<SVGSVGElement> & {
  name: AstroGlyphName;
  size?: number;
};

export function AstroIcon({ name, size = 22, ...props }: Props) {
  const glyph = ASTRO_GLYPHS[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {glyph.circles?.map((c, i) => (
        <circle key={`c-${i}`} cx={c.cx} cy={c.cy} r={c.r} />
      ))}
      {glyph.lines?.map((l, i) => (
        <line key={`l-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
      ))}
      {glyph.paths?.map((d, i) => (
        <path key={`p-${i}`} d={d} />
      ))}
    </svg>
  );
}
