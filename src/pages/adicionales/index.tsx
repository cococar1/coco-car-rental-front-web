import { useQuery } from "@apollo/client";
import { MainLayout } from "@/layouts/Main.layout";
import SectionBanner from "@/components/Banner/Banner";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import SectionContact from "@/containers/contact/Contact";
import CardAdditional from "@/components/CardAdditional";
import SectionContainerCards from "@/containers/additional/container-cards";
import SectionOptions from "@/containers/additional/options";
import { useEffect, useState } from "react";
import { ALL_EXTRA } from "@/gql/extras/extra.query";
import { LoaderUI } from "@/ui/LoaderUI";
import { Extra } from "@/types/Extras.type";

interface AdditionalPageProps {}

const AdditionalPage: React.FC<AdditionalPageProps> = () => {
  const [option, setOption] = useState("todo");
  const [data2, setData] = useState([]);
  const { data, loading } = useQuery(ALL_EXTRA);

  useEffect(() => {
    if (option != "todo") {
      setData(
        data?.extras.filter(
          (e: Extra) => e.type.toLocaleLowerCase() == option.toLocaleLowerCase()
        )
      );
    } else {
      setData(data?.extras || []);
    }
  }, [option, loading, data]);

  return (
    <MainLayout>
      <SectionBanner
        title="Servicios y promociones"
        text="Discover our car rental options with Rent a Car Select from a range of car options and local specials."
        Button={<></>}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SectionOptions setOption={setOption} option={option} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "80px",
          marginBottom: "100px",
        }}
      >
        {loading ? (
          <LoaderUI />
        ) : (
          <SectionContainerCards data={data2}></SectionContainerCards>
        )}
      </div>
    </MainLayout>
  );
};

export default AdditionalPage;
