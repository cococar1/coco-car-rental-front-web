import React from "react";

const FilterIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.25C2.58579 6.25 2.25 6.58579 2.25 7C2.25 7.41421 2.58579 7.75 3 7.75H13.8889H17C17.4142 7.75 17.75 7.41421 17.75 7C17.75 6.58579 17.4142 6.25 17 6.25H13.8889H3ZM3.00003 13.25C2.58581 13.25 2.25003 13.5858 2.25003 14C2.25003 14.4142 2.58581 14.75 3.00003 14.75H13.1111H17C17.4142 14.75 17.75 14.4142 17.75 14C17.75 13.5858 17.4142 13.25 17 13.25H13.1111H3.00003Z"
        fill={props.color ? props.color : "#22282F"}
      />
      <path
        d="M5.5 15V12.5556M11 8.05539V4.99984"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default FilterIcon;
