import React from "react";

const DocumentIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
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
        d="M14 2C14.5523 2 15 2.44772 15 3V7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H15C14.4696 9 13.9609 8.78929 13.5858 8.41421C13.2107 8.03914 13 7.53043 13 7V3C13 2.44772 13.4477 2 14 2Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.41421L13.5858 4H7ZM4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8L20 19C20 19.7957 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7957 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7957 4 19V5C4 4.20435 4.31607 3.44129 4.87868 2.87868Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 9C8 8.44772 8.44772 8 9 8H10C10.5523 8 11 8.44772 11 9C11 9.55229 10.5523 10 10 10H9C8.44772 10 8 9.55229 8 9Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17Z"
        fill={props.color ? props.color : "#E96F45"}
      />
    </svg>
  );
};
export default DocumentIcon;
