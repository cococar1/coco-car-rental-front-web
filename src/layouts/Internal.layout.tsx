import InternalNavigation from "@/components/internalNavigation";
import styled from "styled-components";

export const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainPrincipal>
      <ContainerElement>
        <InternalNavigation />
        <MainLayoutContainer>{children}</MainLayoutContainer>
      </ContainerElement>
    </MainPrincipal>
  );
};

const MainLayoutContainer = styled.section`
  width: 78%;
  /* max-width: 90rem; */
  min-width: 250px;
  margin: 0 0;
  margin-left: 400px;
  /* display:flex;
  
  flex-direction: column; */
  @media (width < 1024px) {
    margin-left: 0px;
    width: 100%;
    /* padding: 0px; */
  }
`;

const MainPrincipal = styled.main`
  padding: 30px 40px;
  margin: 0 0;

  @media (width < 1024px) {
    padding: 30px;
    /* padding: 0px; */
  }
`;

const ContainerElement = styled.div`
  /* display: flex;

  flex-direction: column;
  background-color: yellow; */
`;
