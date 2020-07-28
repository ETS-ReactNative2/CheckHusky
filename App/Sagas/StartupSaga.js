import { put } from "redux-saga/effects";
import NavigationService from "../Services/NavigationService";

export function* startup() {
  NavigationService.navigateAndReset("LoginScreen");
}
