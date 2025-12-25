import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  roman: string;  // "I".."XII"
  size?: number;
  boxed?: boolean; // si tu veux un petit contour (true/false)
};

export function HouseRomanIcon({ roman, size = 22, boxed = false, ...props }: Props) {
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
          rx="6"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.35"
        />
      )}

      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="9"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          letterSpacing: "0.06em",
        }}
      >
        {roman}
      </text>
    </svg>
  );
}
