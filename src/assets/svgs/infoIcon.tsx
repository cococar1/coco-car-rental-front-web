import React from "react";

const InfoIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8.00002C11 7.44773 11.4477 7.00002 12 7.00002H12.01C12.5623 7.00002 13.01 7.44773 13.01 8.00002C13.01 8.5523 12.5623 9.00002 12.01 9.00002H12C11.4477 9.00002 11 8.5523 11 8.00002Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 12C10 11.4477 10.4477 11 11 11H12C12.5523 11 13 11.4477 13 12L13 15C13.5523 15 14 15.4477 14 16C14 16.5523 13.5523 17 13 17H12C11.4477 17 11 16.5523 11 16V13C10.4477 13 10 12.5523 10 12Z"
        fill={props.color ? props.color : "#E96F45"}
      />
    </svg>
  );
};
export default InfoIcon;
