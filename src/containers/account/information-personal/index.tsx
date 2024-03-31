import InpuntUI from "@/ui/InputUI";
import {
  ContainerDataPersonal,
  SectionDataPersonal,
  SectionImage,
} from "./style";
import { useEffect, useState } from "react";
import { StateFile } from "@/types/file";
import FileInputUI from "@/components/FileInputUI";
import FormInfoPersonal from "./formInfoPersonal";
import { useAuthContext } from "@/context/AuthContext";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { User } from "@/types/user.type";
import useScreen from "@/hooks/useScreen";

interface InformationPersonalProps {}

const InformationPersonal: React.FC<InformationPersonalProps> = () => {
  const [file, setFile] = useState<StateFile>({} as StateFile);

  const { width } = useScreen();
  const [user, setUser] = useState<User>({} as User);
  const { loggedUser } = useAuthContext();
  useEffect(() => {
    setUser(loggedUser);
    setFile({
      url: loggedUser?.photo ?? null,
      file: null,
    });
  }, [loggedUser]);
  return (
    <div>
      <ContainerDataPersonal>
        <SectionDataPersonal>
          <h1>Información Persona</h1>
          <FormInfoPersonal user={user} setUser={setUser} />
        </SectionDataPersonal>
        <SectionImage>
          <div>
            <FileInputUI
              file={file}
              setFile={setFile}
              stylesContainer={{ width: "100%" }}
            />
          </div>
        </SectionImage>
      </ContainerDataPersonal>
      <div
        style={{
          marginTop: "54px",
          display: "flex",
          justifyContent: width < 1024 ? "center" : "start",
        }}
      >
        <ButtonPrincipalUI sx={{ width: "200px" }}>Guardar</ButtonPrincipalUI>
      </div>
    </div>
  );
};

export default InformationPersonal;
