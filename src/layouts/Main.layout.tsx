import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { useAuthContext } from "@/context/AuthContext";
import { User } from "@/types/user.type";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import styled from "styled-components";

// import { Footer } from '@/components/Footer'
// import { AuthContext } from '@/contexts/AuthContext'

export const MainLayout = ({
  children,
  nofooter,
  changeColorNavBar,
}: {
  nofooter?: boolean;
  children: React.ReactNode;
  changeColorNavBar?: boolean;
}) => {
  const { data: session, status: statusNexth } = useSession();

  
  return (
    <>
      {changeColorNavBar ? (
        <NavBar
          changeColor={changeColorNavBar}
          user={session as User}
          // role={loggedUser ? loggedUser.role : ""}
        />
      ) : (
        <NavBar user={session as User}></NavBar>
      )}
      <MainLayoutContainer>{children}</MainLayoutContainer>
      {/* {!nofooter && <Footer />} */}
    </>
  );
};

const MainLayoutContainer = styled.main`
  width: 100%;
  /* max-width: 90rem; */
  min-width: 250px;
  margin: 0 0;
`;
