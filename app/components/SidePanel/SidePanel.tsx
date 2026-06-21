import { Dispatch, SetStateAction } from "react";
import SidePanelItem from "./SidePanelItem"
import "./style.css"
import { BooleanStatusComponent, StringStatusComponent } from "../Structs";
import SidePanelData from "./SidePanelData.json";


export default function SidePanel(props: { state: StringStatusComponent, sidepanelView: BooleanStatusComponent }) {
  //<div className={props.sidepanelView.state ? "SidePanel-bg sidepanel-bg-show" : "SidePanel-bg sidepanel-bg-hide"} />
  return (
    <>
      <div className={props.sidepanelView.state ? "SidePanel sidepanel-show" : "SidePanel sidepanel-hide"} >
        <aside className="menu">

          {SidePanelData.datas.map((item) => (
            <>
              <p className="menu-label">{item.title}</p>
              <ul className="menu-list">
                {item.items.map((childitem, index) => (
                  <SidePanelItem itemName={childitem.id} statusCompenent={props.state}
                    sidepanelView={props.sidepanelView} key={index}>
                    {childitem.name}
                  </SidePanelItem>
                ))}
              </ul>
            </>
          ))}
        </aside>
        
      </div>
    </>
  );
}
