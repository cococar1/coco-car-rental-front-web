import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_CONTACT } from "@/gql/contact/contact.mutation";
import { ContactInput } from "@/types/Contact.type";

export const useContact = () => {
  const [createContactFn, createContactRes] = useMutation(CREATE_CONTACT);

  const createContact = (
    data: ContactInput,
    onSuccess: (val: any) => void
  ) => {
    createContactFn({
      variables: {
        data,
      },
      onCompleted(data) {
        if (data) {
          toast.success(
            "Mensaje enviado correctamente, se le estará contactando",
            {
              position: "bottom-right",
            }
          );
          onSuccess && onSuccess(data.createContact);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al enviar mensaje de contacto");
      },
    });
  };

  return {
    createContact,
    createContactOption: {
      data: createContactRes.data?.createContact,
      loading: createContactRes.loading,
      error: createContactRes.error,
    },
  };
};
