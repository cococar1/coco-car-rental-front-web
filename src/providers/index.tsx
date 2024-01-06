import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Providers;
