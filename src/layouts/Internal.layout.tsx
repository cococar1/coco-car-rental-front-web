import InternalNavigation from "@/components/internalNavigation";
import styled from "styled-components";

export const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainPrincipal>
      <div>

      <InternalNavigation  />
      <MainLayoutContainer>{children}</MainLayoutContainer>
      </div>
    </MainPrincipal>
  );
};

const MainLayoutContainer = styled.section`
  width: 78%;
  /* max-width: 90rem; */
  min-width: 250px;
  margin: 0 0;
  margin-left: 400px;

`;

const MainPrincipal = styled.main`
  padding: 30px 40px;
  margin: 0 0;
`;
