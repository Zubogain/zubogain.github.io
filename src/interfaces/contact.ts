export interface IContactState {
  isError: boolean;
  isResponse: boolean;
  prevIsResponse: boolean;
}

export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
