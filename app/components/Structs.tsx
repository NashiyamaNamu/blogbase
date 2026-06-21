import { Dispatch, SetStateAction } from "react";

export interface StringStatusComponent{
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}
export interface BooleanStatusComponent{
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}