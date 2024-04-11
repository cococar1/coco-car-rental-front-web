export interface ContactInput {
  _id?: string;
  content?: string;
  email?: string;
  subject?: string;
  createdAt?: string;
}

export interface ContactHookType {
  createContact: (data: ContactInput, onSuccess: (val: any) => void) => void;
  createContactOption: {
    data: ContactInput | any;
    loading: boolean;
    error: any;
  };
}
