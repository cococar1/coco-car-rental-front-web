import { MainLayout } from "@/layouts/MainLayout";
import SectionBanner from "@/components/Banner/Banner";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import SectionContact from "@/containers/contact/Contact";
import CardAdditional from "@/components/CardAdditional";
import SectionContainerCards from "@/containers/additional/container-cards";
import SectionOptions from "@/containers/additional/options";
import { useEffect, useState } from "react";

interface AdditionalPageProps {}

const dataTest = [
  {
    type: "Promociones",
    date: "25 diciembre 2023",
    title: "Solicita la silla de niño para tu bebe",
    content:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
  },
  {
    type: "Promociones",
    // date: "25 diciembre 2023",
    title: "Solicita la silla de niño para tu bebe",
    content:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
  },
  {
    type: "Promociones",
    date: "25 diciembre 2023",
    title: "Solicita la silla de niño para tu bebe",
    content:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
  },
  {
    type: "Adicionales",
    date: "25 diciembre 2023",
    title: "Solicita la silla de niño para tu bebe",
    content:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
  },
  {
    type: "Adicionales",
    date: "25 diciembre 2023",
    title: "Solicita la silla de niño para tu bebe",
    content:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
  },
  {
    type: "Adicionales",
    date: "25 diciembre 2023",
    title: "Solicita la silla de niño para tu bebe",
    content:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
  },
];
const AdditionalPage: React.FC<AdditionalPageProps> = () => {
  const [option, setOption] = useState("todo");
  const [data, setData] = useState(dataTest);

  useEffect(() => {
    if (option != "todo") {
      setData(
        dataTest.filter(
          (e) => e.type.toLocaleLowerCase() == option.toLocaleLowerCase()
        )
      );
    } else {
      setData(dataTest);
    }
  }, [option]);
  return (
    <MainLayout>
      <SectionBanner
        title="Servicios y promociones"
        text="Discover our car rental options with Rent a Car Select from a range of car options and local specials."
        Button={<ButtonPrincipalUI>Consulta</ButtonPrincipalUI>}
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
        <SectionContainerCards data={data}></SectionContainerCards>
      </div>
    </MainLayout>
  );
};

export default AdditionalPage;
