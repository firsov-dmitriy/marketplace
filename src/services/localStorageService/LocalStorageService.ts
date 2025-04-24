import { SignUpResponseData } from "../../gen";

export class LocalStorageService {
  static setProfile(profile: SignUpResponseData) {
    localStorage.setItem("profile", JSON.stringify(profile));
  }

  static getProfile<T = SignUpResponseData>(): T | null {
    const data = localStorage.getItem("profile");
    return data ? (JSON.parse(data) as T) : null;
  }

  static clearProfile() {
    localStorage.removeItem("profile");
  }
}
