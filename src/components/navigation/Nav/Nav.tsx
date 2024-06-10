import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { baseColors } from "../../../styles/theme";

import { NavigationContainer, NavigationItem } from "./Nav.styles";

import { IconHome, IconHistory, IconProfile } from "../../core/Icons";

import NavFloat from "../NavFloat";

const Nav = () => {
  const [floatNav, setFloatNav] = useState(false);
  const floatNavRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (floatNavRef.current && !floatNavRef.current.contains(event.target as Node)) {
      setFloatNav(false);
    }
  };

  useEffect(() => {
    if (floatNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [floatNav]);

  const handleToggleFloatNav = () => {
    setFloatNav((prev) => !prev);
  };

  return (
    <NavigationContainer>
      <NavigationItem>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `nav-element ${isActive ? "active" : ""}`
          }
        >
          <IconHome fill={baseColors.silverGray} />
        </NavLink>
      </NavigationItem>

      <NavigationItem>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `nav-element ${isActive ? "active" : ""}`
          }
        >
          <IconHistory fill={baseColors.silverGray} />
        </NavLink>
      </NavigationItem>

      <NavigationItem>
        <div ref={floatNavRef}>
          <button className="nav-element" onClick={handleToggleFloatNav}>
            <IconProfile fill={baseColors.silverGray} />
          </button>
          {floatNav && <NavFloat />}
        </div>
      </NavigationItem>
    </NavigationContainer>
  );
};

export default Nav;
