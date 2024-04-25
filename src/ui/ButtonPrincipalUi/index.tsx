import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ReactNode, CSSProperties, ForwardedRef, HTMLAttributes } from "react";
import { ButtonPrincipalContainer } from "./buttonPrincipal.style";

interface ButtonPrincipalProps extends HTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  btnRef?: ForwardedRef<HTMLButtonElement>;
  startIcon?: ReactNode;
  loading?: boolean;
  endIcon?: ReactNode;
}

export const ButtonPrincipalUI: React.FC<ButtonPrincipalProps> = ({
  sx,
  btnRef,
  startIcon,
  loading,
  endIcon,
  children,
  ...props
}) => {
  return (
    <ButtonPrincipalContainer style={sx} ref={btnRef} {...props}>
      {startIcon && (
        <span className="button-startIcon">{startIcon}</span>
      )}
      {loading && (
        <span className="button-startIcon">
          <AiOutlineLoading3Quarters />{" "}
        </span>
      )}
      {children}
      {endIcon && <span className="button-endIcon">{endIcon}</span>}
    </ButtonPrincipalContainer>
  );
};
