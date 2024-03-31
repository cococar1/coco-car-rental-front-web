import React from "react";

const OptionsNavIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.250122 1C0.250122 0.585786 0.585909 0.25 1.00012 0.25H17.0001C17.4143 0.25 17.7501 0.585786 17.7501 1C17.7501 1.41421 17.4143 1.75 17.0001 1.75H1.00012C0.585909 1.75 0.250122 1.41421 0.250122 1ZM0.250122 6C0.250122 5.58579 0.585909 5.25 1.00012 5.25L17.0001 5.25C17.4143 5.25 17.7501 5.58579 17.7501 6C17.7501 6.41422 17.4143 6.75 17.0001 6.75L1.00012 6.75C0.585908 6.75 0.250122 6.41421 0.250122 6ZM1.00012 10.25C0.585909 10.25 0.250122 10.5858 0.250122 11C0.250122 11.4142 0.585909 11.75 1.00012 11.75H17.0001C17.4143 11.75 17.7501 11.4142 17.7501 11C17.7501 10.5858 17.4143 10.25 17.0001 10.25H1.00012Z"
        fill="black"
      />
    </svg>
  );
};
export default OptionsNavIcon;