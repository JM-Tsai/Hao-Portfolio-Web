import { useContext } from "react";
import NavigationContext from "../context/NavContext";

export default function useNav() {
    return useContext(NavigationContext);
}