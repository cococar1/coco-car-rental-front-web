import InternalNavigation from "@/components/internalNavigation";
import { LoaderUI } from "@/ui/LoaderUI";
import { signOut, useSession } from "next-auth/react";
import styled from "styled-components";

export const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status: statusNext } = useSession();
  if (statusNext === "unauthenticated") {
    signOut({ redirect: true, callbackUrl: "/login" });
  }

  if (statusNext == "loading") {
    return (
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <LoaderUI></LoaderUI>
        </div>
      </main>
    );
  }
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
  /* width: 80%; */
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
  */
  /* background-color: yellow;  */
`;
