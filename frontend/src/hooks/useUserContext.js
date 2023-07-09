import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function useUserContext() {
  return useContext(UserContext);
}
