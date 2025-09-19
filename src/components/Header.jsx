import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemedIcon from "./ThemedIcon";
import "../css/components/Header.css";
import siderBarIconLight from "../assets/icons/Sidebar.png";
import siderBarIconDark from "../assets/icons/Sidebar-dark.png";
import SearchIcon from "../assets/icons/Search.png";
import SearchIconDark from "../assets/icons/Search-dark.png";
import TextIcon from "../assets/icons/Text.png";
import TextIconDark from "../assets/icons/Text-dark.png";
import StarIconLight from "../assets/icons/Star.png";
import StarIconDark from "../assets/icons/Star-dark.png";
import BellLight from "../assets/icons/Bell-light.png";
import BellDark from "../assets/icons/Bell-dark.png";
import ClockIconLight from "../assets/icons/ClockCounterClockwise-light.png";
import ClockIconDark from "../assets/icons/ClockCounterClockwise.png";
import lightIcon from "../assets/icons/Sun.png";
import DarkIcon from "../assets/icons/Sun-dark.png";

function Header({ toggleSidebar, toggleRightBar }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header-container">
      <div className="header-left">
        <div>
          <button
            className="sidebar-toggle-btn"
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
          >
            <ThemedIcon
              lightSrc={siderBarIconLight}
              darkSrc={siderBarIconDark}
            />
          </button>
        </div>
        <div className="star-icon">
          <ThemedIcon lightSrc={StarIconLight} darkSrc={StarIconDark} />
        </div>
        <div className="page-title">Dashboards</div>
        <div className="foward-slash">/</div>
        <div className="page-subtitle">Default</div>
      </div>

      <div className="header-right">
        <div className="search-box-wrapper">
          <ThemedIcon
            lightSrc={SearchIcon}
            darkSrc={SearchIconDark}
            className="search-icon-left"
          />
          <input type="search" className="search-box" placeholder="Search" />
          <ThemedIcon
            lightSrc={TextIcon}
            darkSrc={TextIconDark}
            className="search-icon-right"
          />
        </div>

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          <ThemedIcon lightSrc={lightIcon} darkSrc={DarkIcon} />
        </button>

        <button className="icon-btn" aria-label="Activities">
          <ThemedIcon lightSrc={ClockIconLight} darkSrc={ClockIconDark} />
        </button>

        <button className="icon-btn" aria-label="Notifications">
          <ThemedIcon lightSrc={BellLight} darkSrc={BellDark} />
        </button>
        <button className="icon-btn" onClick={toggleRightBar} aria-label="Notification-Toggle">
          <ThemedIcon lightSrc={siderBarIconLight} darkSrc={siderBarIconDark} />
        </button>
      </div>
    </header>
  );
}

export default Header;
