import React from "react";

const UsersIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.00002 4C7.34316 4 6.00002 5.34315 6.00002 7C6.00002 8.65685 7.34316 10 9.00002 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9.00002 4ZM4.00002 7C4.00002 4.23858 6.23859 2 9.00002 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9.00002 12C6.23859 12 4.00002 9.76142 4.00002 7Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 16C6.20435 16 5.44129 16.3161 4.87868 16.8787C4.31607 17.4413 4 18.2043 4 19V21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V19C2 17.6739 2.52678 16.4021 3.46447 15.4645C4.40215 14.5268 5.67392 14 7 14H11C12.3261 14 13.5979 14.5268 14.5355 15.4645C15.4732 16.4021 16 17.6739 16 19V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V19C14 18.2043 13.6839 17.4413 13.1213 16.8787C12.5587 16.3161 11.7956 16 11 16H7Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0312 2.88198C15.1682 2.34696 15.713 2.02429 16.248 2.16127C17.3235 2.43665 18.2768 3.06215 18.9576 3.93916C19.6383 4.81617 20.0078 5.89481 20.0078 7.00502C20.0078 8.11524 19.6383 9.19388 18.9576 10.0709C18.2768 10.9479 17.3235 11.5734 16.248 11.8488C15.713 11.9858 15.1682 11.6631 15.0312 11.1281C14.8942 10.593 15.2169 10.0483 15.7519 9.91127C16.3973 9.74605 16.9692 9.37075 17.3777 8.84454C17.7861 8.31833 18.0078 7.67115 18.0078 7.00502C18.0078 6.3389 17.7861 5.69171 17.3777 5.16551C16.9692 4.6393 16.3973 4.264 15.7519 4.09877C15.2169 3.96179 14.8942 3.41701 15.0312 2.88198Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.0318 14.9001C17.1698 14.3653 17.7152 14.0437 18.25 14.1818C19.3185 14.4577 20.2658 15.0793 20.9441 15.9498C21.6224 16.8203 21.9936 17.8907 22 18.9943L22 19L22 21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V19.0031C19.9956 18.3419 19.7729 17.7007 19.3665 17.1791C18.9595 16.6568 18.3911 16.2838 17.75 16.1183C17.2153 15.9802 16.8937 15.4348 17.0318 14.9001Z"
        fill={props.color ? props.color : "#E96F45"}
      />
    </svg>
  );
};
export default UsersIcon;
