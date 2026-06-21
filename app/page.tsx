"use client"

import { useState } from "react";
import SidePanel from "./components/SidePanel/SidePanel";
import MainContent from "./components/MainContent/MainContent";

export default function Home() {
  const [sidePanelState, setSidePanelState] = useState<string>("");
  const [menuVisible, setMenuVisible] = useState<boolean>(true)

  return (
    <div>

      <nav className="navbar" role="navigation" aria-label="main navigation">
        <button className="button nav-menu-button" onClick={() => { setMenuVisible(!menuVisible); }}>
          {menuVisible?"❌️":"📕"}
        </button>
        <div className="nav-title">
          <span className="title size-6">
            🐟️ブログ
          </span>
        </div>
      </nav>
      <SidePanel state={{ state: sidePanelState, setState: setSidePanelState }}
        sidepanelView={{ state: menuVisible, setState: setMenuVisible }} />
      <MainContent state={{ state: sidePanelState, setState: setSidePanelState }}></MainContent>
    </div>
  );
}
