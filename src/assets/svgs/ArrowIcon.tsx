import React from "react";

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="15"
      height="7"
      viewBox="0 0 15 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Group 5">
        <path
          id="Stroke 3"
          d="M13.5 1L7.5 6L1.5 1"
          stroke={props.color ? props.color : "#E96F45"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
export default ArrowIcon;
