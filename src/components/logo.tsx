import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width="120"
      height="40"
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        fontFamily="Montserrat, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill="url(#logo-gradient)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        ViralBe.AI
      </text>
    </svg>
  );
}
