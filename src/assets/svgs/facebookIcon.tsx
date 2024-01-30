import React from "react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.72988 14V7.7H8.0251L8.4 4.9H5.72988V3.5364C5.72988 2.8154 5.75198 2.1 6.96098 2.1H8.18554V0.098C8.18554 0.0679 7.1337 0 6.06958 0C3.8472 0 2.45566 1.1599 2.45566 3.29V4.9H0V7.7H2.45566V14H5.72988Z"
        fill={props.color ? props.color : "#FAFAFA"}
      />
    </svg>
  );
};
export default FacebookIcon;
