import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  n: number;     // 1..12
  size?: number; // px
};

export function HouseIcon({ n, size = 22, ...props }: Props) {
  const label = Math.max(1, Math.min(12, n)).toString();

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
      <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="8"
        fill="currentColor"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {label}
      </text>
    </svg>
  );
}
