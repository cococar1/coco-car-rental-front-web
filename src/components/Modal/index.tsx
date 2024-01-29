import { MouseEventHandler, ReactNode } from "react";
import CloseIcon from "../../assets/svgs/closeIcon";
import { ContainerContent, ContainerHeaderOptions, NewModal } from "./modal.style";

interface ModalProps {
  children: ReactNode;
  onclickClose: MouseEventHandler<HTMLDivElement>;
  styleModal?: React.CSSProperties;
  styleContent?: React.CSSProperties;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  onclickClose,
  styleModal,
  title,
  styleContent,
}) => {
  return (
    <NewModal style={styleModal ?? {}}>
      <ContainerHeaderOptions
        style={title ? { justifyContent: "space-between" } : {}}
      >
        {title && <h1>{title}</h1>}
        <div
          style={{ display: "inline", cursor: "pointer" }}
          onClick={onclickClose}
        >
          <CloseIcon></CloseIcon>
        </div>
      </ContainerHeaderOptions>
      <ContainerContent style={styleContent ?? {}}>{children}</ContainerContent>
      {/* <ContainerBottom></ContainerBottom>  */}
    </NewModal>
  );
};

export default Modal;
