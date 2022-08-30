import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStatae } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootStatae> = useSelector