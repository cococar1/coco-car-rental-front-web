import React from "react";

const CheckIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1736 4.44714C17.479 4.72703 17.4996 5.20146 17.2197 5.5068L8.05303 15.5068C7.9148 15.6576 7.72097 15.7454 7.51646 15.7498C7.31194 15.7543 7.11448 15.675 6.96983 15.5303L2.80317 11.3637C2.51027 11.0708 2.51027 10.5959 2.80317 10.303C3.09606 10.0101 3.57093 10.0101 3.86383 10.303L7.4766 13.9158L16.114 4.49321C16.3939 4.18787 16.8683 4.16724 17.1736 4.44714Z"
        fill={props.color ? props.color : "#088323"}
      />
    </svg>
  );
};
export default CheckIcon;
