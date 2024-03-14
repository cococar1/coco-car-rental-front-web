const EmailIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect
        x="4"
        y="6"
        width="16"
        height="12"
        rx="2"
        stroke={props.color ? props.color : "#333333"}
        strokeWidth="1"
      />
      <path
        d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
        stroke={props.color ? props.color : "#333333"}
        strokeWidth="1"
      />
    </svg>
  );
};

export default EmailIcon;
