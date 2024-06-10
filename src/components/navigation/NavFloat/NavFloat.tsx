import { useContext } from "react";
import { signOut } from "firebase/auth";

import { auth } from "../../../firebase";
import { ThemeContext } from "../../../context/theme/themeContext";
import useTheme from "../../../hooks/theme/useTheme";


import {
  NavFloatContainer,
  NavFloatItem,
  NavFloatIcon,
} from "./NavFloat.styles";

import IconLogout from "../../core/Icons/IconLogout";
import IconProfile from "../../core/Icons/IconProfile";

import { IconDark, IconLight } from "../../core/Icons";

const NavFloat = () => {
  const theme = useTheme();
  const {themeMode, toggleThemeMode} = useContext(ThemeContext);
  
  const handleSignOut = () => signOut(auth);

  return (
    <NavFloatContainer>
      <NavFloatItem>
        <div className="nav-float-item-text">
          <NavFloatIcon>
            <IconProfile fill={theme?.colors.text} />
          </NavFloatIcon>
          <span className="ellipsis">
            {auth?.currentUser?.email}
          </span>
        </div>
      </NavFloatItem>

      <NavFloatItem>
        <button className="nav-float-item-cta" onClick={toggleThemeMode}>
          <NavFloatIcon>
            {themeMode === "light" ? <IconDark /> : <IconLight />}
          </NavFloatIcon>
          <span>{themeMode === "light" ? "Switch Mode" : "Switch Mode"}</span>
        </button>
      </NavFloatItem>

      <NavFloatItem>
        <button className="nav-float-item-cta" onClick={handleSignOut}>
          <NavFloatIcon>
            <IconLogout fill={theme?.colors.text} />
          </NavFloatIcon>
          <span>Log Out</span>
        </button>
      </NavFloatItem>
    </NavFloatContainer>
  );
};

export default NavFloat;
