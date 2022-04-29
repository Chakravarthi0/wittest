import { ReactChangeEvent } from "./";
type passwordInputType = {
  name: string;
  handleInputChange: (event: ReactChangeEvent) => void;
  inputValue: string;
};

export type { passwordInputType };
