import Accordion from "@/components/Accordion";
import CarDetails from "@/containers/booking/CarDetails";
import InformationPersonal from "@/containers/booking/InformationPersonal";
import { MainLayout } from "@/layouts/MainLayout";
import { CarDetailPage } from "@/styles/pages/carDetails.style";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";

interface CarIdPageProps {}

const CarIdPage: React.FC<CarIdPageProps> = () => {
  return (
    <MainLayout changeColorNavBar={true}>
      <CarDetailPage>
        <div
          style={{
            background: "",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "65%",
          }}
        >
          <div>
            <p>
              Reservar<span style={{ padding: "0px 20px" }}>{">"} </span>
              <span style={{ color: "#FD5631" }}>Concretar reserva</span>
            </p>
          </div>
          <CarDetails />
          <InformationPersonal />
          <div style={{ width: "100%", marginTop: "20px" }}>
            <Accordion
              title="Términos y condiciones"
              content="Lorem ipsum dolor sit amet consectetur. Tortor morbi varius leo velit. Sed ac et pellentesque nulla nisl ac. Ut sed elementum dictum blandit etiam sed suscipit sit amet. Fusce et posuere eu amet ante. Lorem ipsum dolor sit amet consectetur. Tortor morbi varius leo velit. Sed ac et pellentesque nulla nisl ac. Ut sed elementum dictum blandit etiam sed suscipit sit amet. Fusce et posuere eu amet ante."
              styleContainer={{
                width: "100%",
                maxWidth: "100%",
                // fontSize: "font-size: 18px"
              }}
              styleContent={{ width: "100%" }}
              styleIcon={{ color: "#313E50" }}
            ></Accordion>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "20px",
            }}
          >
            <ButtonPrincipalUI>Continuar</ButtonPrincipalUI>
          </div>
        </div>
      </CarDetailPage>
    </MainLayout>
  );
};

export default CarIdPage;
