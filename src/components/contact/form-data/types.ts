export interface FormData {
  fullname: {
    value: string;
    error: string|null;
    touched: boolean;
  };
  email: {
    value: string;
    error: string|null;
    touched: boolean;
  };
  message: {
    value: string;
    error: string|null;
    touched: boolean;
  }
}