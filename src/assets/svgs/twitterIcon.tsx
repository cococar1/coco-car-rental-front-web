import React from "react";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.59956 11C10.1183 11 13.1369 6.76751 13.1369 3.0975C13.1369 2.97702 13.1369 2.85721 13.1281 2.73809C13.7153 2.3455 14.2221 1.85815 14.625 1.30041C14.078 1.52513 13.4967 1.67269 12.9022 1.73767C13.5281 1.39043 13.9969 0.844871 14.2213 0.201164C13.632 0.524709 12.9877 0.752816 12.3157 0.87533C11.1793 -0.242865 9.27883 -0.297015 8.07008 0.754846C7.29129 1.43307 6.96004 2.44432 7.20208 3.40887C4.78969 3.29651 2.54183 2.24194 1.0179 0.507111C0.221569 1.77625 0.628875 3.39939 1.94732 4.21435C1.46981 4.20148 1.00254 4.08236 0.585 3.86711V3.90231C0.585731 5.22424 1.59266 6.36274 2.99227 6.62469C2.5506 6.73638 2.08699 6.75262 1.638 6.67207C2.03068 7.8038 3.15754 8.57882 4.44088 8.60116C3.37837 9.37415 2.06578 9.79381 0.714431 9.79246C0.476044 9.79178 0.237656 9.77892 0 9.75252C1.37256 10.5675 2.96888 11 4.59956 10.998"
        // fill="#FAFAFA"
        fill={props.color ? props.color : "#FAFAFA"}
      />
    </svg>
  );
};
export default TwitterIcon;
