import React, { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { BooleanStatusComponent, StringStatusComponent } from "../Structs";

export default function SidePanelItem(props: { itemName: string, statusCompenent: StringStatusComponent, sidepanelView: BooleanStatusComponent, children: ReactNode }) {
    return (
        <li >
            <a className={props.statusCompenent.state === props.itemName ? "is-active" : ""}
                onClick={() => { props.statusCompenent.setState!(props.itemName); props.sidepanelView.setState!(false); }}>
                {props.children}
            </a>
        </li>
    );
}