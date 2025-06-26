import React from "react";

export default function SvgArrow({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      className={`${className} size-3.5`}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3336 4.66473H1.33361"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.97632 0.668213L11.9763 4.66822L7.97632 8.66822"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
