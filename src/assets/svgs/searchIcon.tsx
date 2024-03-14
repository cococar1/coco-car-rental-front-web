import React from "react";

const SearchIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
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
        d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
        fill={props.color ? props.color : "#E96F45"}
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.2929 15.7071C13.9024 15.3166 13.9024 14.6834 14.2929 14.2929Z"
        fill={props.color ? props.color : "#E96F45"}
      />
    </svg>
  );
};
export default SearchIcon;
