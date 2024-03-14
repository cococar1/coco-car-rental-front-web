import React from "react";

const CalculatorIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
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
        clip-rule="evenodd"
        d="M6.00001 4C5.44772 4 5.00001 4.44772 5.00001 5V19C5.00001 19.5523 5.44772 20 6.00001 20H18C18.5523 20 19 19.5523 19 19V5C19 4.44772 18.5523 4 18 4H6.00001ZM3.00001 5C3.00001 3.34315 4.34316 2 6.00001 2H18C19.6569 2 21 3.34315 21 5V19C21 20.6569 19.6569 22 18 22H6.00001C4.34316 22 3.00001 20.6569 3.00001 19V5Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M6.99999 8.00004C6.99999 6.89547 7.89542 6.00004 8.99999 6.00004H15C16.1046 6.00004 17 6.89547 17 8.00004V9.00004C17 10.1046 16.1046 11 15 11H8.99999C7.89542 11 6.99999 10.1046 6.99999 9.00004V8.00004ZM15 8.00004H8.99999V9.00004H15V8.00004Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M7.99999 13C8.55228 13 8.99999 13.4477 8.99999 14V14.01C8.99999 14.5622 8.55228 15.01 7.99999 15.01C7.44771 15.01 6.99999 14.5622 6.99999 14.01V14C6.99999 13.4477 7.44771 13 7.99999 13Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M12 13C12.5523 13 13 13.4477 13 14V14.01C13 14.5622 12.5523 15.01 12 15.01C11.4477 15.01 11 14.5622 11 14.01V14C11 13.4477 11.4477 13 12 13Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M16 13C16.5523 13 17 13.4477 17 14V14.01C17 14.5622 16.5523 15.01 16 15.01C15.4477 15.01 15 14.5622 15 14.01V14C15 13.4477 15.4477 13 16 13Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M7.99999 16C8.55228 16 8.99999 16.4477 8.99999 17V17.01C8.99999 17.5622 8.55228 18.01 7.99999 18.01C7.44771 18.01 6.99999 17.5622 6.99999 17.01V17C6.99999 16.4477 7.44771 16 7.99999 16Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M12 16C12.5523 16 13 16.4477 13 17V17.01C13 17.5622 12.5523 18.01 12 18.01C11.4477 18.01 11 17.5622 11 17.01V17C11 16.4477 11.4477 16 12 16Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M16 16C16.5523 16 17 16.4477 17 17V17.01C17 17.5622 16.5523 18.01 16 18.01C15.4477 18.01 15 17.5622 15 17.01V17C15 16.4477 15.4477 16 16 16Z"
        fill={props.color ? props.color : "#E96F45"}
      />
    </svg>
  );
};
export default CalculatorIcon;
