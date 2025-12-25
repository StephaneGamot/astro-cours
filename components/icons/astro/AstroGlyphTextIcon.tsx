import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  symbol: string;      // ex: "♈", "☿", "♃"
  size?: number;       // px
  boxed?: boolean;     // badge autour
};

export function AstroGlyphTextIcon({
  symbol,
  size = 22,
  boxed = true,
  ...props
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {boxed && (
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="7"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.35"
        />
      )}

      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="14"
        fill="currentColor"
        style={{
          fontFamily:
            // bonne couverture des symboles
            `"Noto Sans Symbols 2","Segoe UI Symbol","Apple Symbols","Symbola",system-ui,sans-serif`,
          fontWeight: 600,
        }}
      >
        {symbol}
      </text>
    </svg>
  );
}
