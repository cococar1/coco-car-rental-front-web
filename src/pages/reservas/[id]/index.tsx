import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Accordion from "@/components/Accordion";
import CarDetails from "@/containers/booking/CarDetails";
import InformationPersonal from "@/containers/booking/InformationPersonal";
import { useBookingContext } from "@/context/BookingContext";
import { CREATE_BOOKING } from "@/gql/booking/booking.mutation";
import { ONE_CAR } from "@/gql/cars/query";
import { MainLayout } from "@/layouts/Main.layout";
import { CarDetailPage } from "@/styles/pages/carDetails.style";
import { Car } from "@/types/Car.type";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { LoaderUI } from "@/ui/LoaderUI";
import { useLazyQuery, useMutation } from "@apollo/client";

// interface CarIdPageProps {}

const CarIdPage: React.FC = () => {
  const route = useRouter();
  const { id } = route.query;
  const [getCar, getCarRes] = useLazyQuery(ONE_CAR);
  // const [bookingCarFn, bookingCarRes] = useMutation(CREATE_BOOKING);

  const {
    newBooking,
    createBooking,
    createOptions: { data, loading, error },
  } = useBookingContext();

  const handleClickBooking = async () => {
    console.log("new booking");
    console.log(newBooking);
    createBooking(
      {
        ...newBooking,
        car: id! as string,
      },
      () => {}
    );
  };

  useEffect(() => {
    if (data) {
      route.push(data);
    }
  }, [createBooking, data]);
  useEffect(() => {
    const getData = async () => {
      await getCar({
        variables: {
          id,
        },
      });
    };
    getData();
  }, [getCar, getCarRes.data, id]);

  return (
    <MainLayout changeColorNavBar={true}>
      <CarDetailPage>
        {getCarRes.loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <LoaderUI />
          </div>
        )}

        {!getCarRes.loading && (
          <div
            style={{
              background: "",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "65%",
            }}
          >
            <div style={{ marginTop: "40px" }}>
              <p>
                Reservar<span style={{ padding: "0px 20px" }}>{">"} </span>
                <span style={{ color: "#FD5631" }}>Concretar reserva</span>
              </p>
            </div>
            <CarDetails car={getCarRes.data?.car ?? ({} as Car)} />
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
              <ButtonPrincipalUI onClick={handleClickBooking} loading={loading}>
                Continuar
              </ButtonPrincipalUI>
            </div>
          </div>
        )}
      </CarDetailPage>
    </MainLayout>
  );
};

export default CarIdPage;
