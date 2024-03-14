import React from "react";

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.3335 2.83353C2.15668 2.83353 1.98712 2.90377 1.86209 3.02879C1.7411 3.14978 1.67142 3.31249 1.66705 3.48311C1.82038 5.91239 2.85456 8.20267 4.57612 9.92424C6.29768 11.6458 8.58797 12.68 11.0173 12.8333C11.1879 12.8289 11.3506 12.7593 11.4716 12.6383C11.5966 12.5132 11.6668 12.3437 11.6668 12.1669V9.95155L9.27972 8.9967L8.57182 10.1765C8.39332 10.474 8.01646 10.5849 7.70529 10.4314C6.12599 9.65255 4.8478 8.37436 4.06892 6.79507C3.91546 6.4839 4.02632 6.10704 4.32383 5.92853L5.50365 5.22064L4.54881 2.83353H2.3335ZM0.919282 2.08598C1.29436 1.71091 1.80306 1.5002 2.3335 1.5002H5.00016C5.27277 1.5002 5.5179 1.66616 5.61915 1.91927L6.95248 5.2526C7.074 5.55641 6.95708 5.90351 6.67649 6.07186L5.56049 6.74146C6.10974 7.6372 6.86315 8.39062 7.7589 8.93986L8.4285 7.82386C8.59685 7.54328 8.94395 7.42635 9.24776 7.54788L12.5811 8.88121C12.8342 8.98245 13.0002 9.22759 13.0002 9.50019V12.1669C13.0002 12.6973 12.7894 13.206 12.4144 13.5811C12.0393 13.9561 11.5306 14.1669 11.0002 14.1669C10.9867 14.1669 10.9732 14.1664 10.9597 14.1656C8.1967 13.9977 5.59067 12.8244 3.63331 10.867C1.67596 8.90969 0.502634 6.30365 0.334724 3.54063C0.333905 3.52717 0.333496 3.51368 0.333496 3.5002C0.333496 2.96976 0.54421 2.46105 0.919282 2.08598Z"
        fill={props.color ? props.color : "#9691A4"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3335 4.16686C8.3335 3.79867 8.63197 3.5002 9.00016 3.5002C9.53059 3.5002 10.0393 3.71091 10.4144 4.08598C10.7894 4.46105 11.0002 4.96976 11.0002 5.5002C11.0002 5.86838 10.7017 6.16686 10.3335 6.16686C9.96531 6.16686 9.66683 5.86838 9.66683 5.5002C9.66683 5.32338 9.59659 5.15381 9.47157 5.02879C9.34654 4.90377 9.17697 4.83353 9.00016 4.83353C8.63197 4.83353 8.3335 4.53505 8.3335 4.16686Z"
        fill={props.color ? props.color : "#9691A4"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.3335 1.50016C8.3335 1.13197 8.63197 0.833496 9.00016 0.833496C10.2378 0.833496 11.4248 1.32516 12.3 2.20033C13.1752 3.0755 13.6668 4.26249 13.6668 5.50016C13.6668 5.86835 13.3684 6.16683 13.0002 6.16683C12.632 6.16683 12.3335 5.86835 12.3335 5.50016C12.3335 4.61611 11.9823 3.76826 11.3572 3.14314C10.7321 2.51802 9.88422 2.16683 9.00016 2.16683C8.63197 2.16683 8.3335 1.86835 8.3335 1.50016Z"
        fill={props.color ? props.color : "#9691A4"}
      />
    </svg>
  );
};
export default PhoneIcon;
