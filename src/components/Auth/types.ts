import { SignUpResponseData } from "../../gen";

export interface AuthContextType {
  isAuthenticate: boolean | null;
  logout: () => void;
  profile: SignUpResponseData | null;
  login: () => void;
}
