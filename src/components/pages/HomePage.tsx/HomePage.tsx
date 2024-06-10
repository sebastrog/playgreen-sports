import { useContext } from "react";

import { ThemeContext } from "../../../context/theme/themeContext";

import LayoutSection from "../../layouts/LayoutSection"

import {
  ThemeModeContainer,
  CardList,
  LikeBtn,
  DislikeBtn,
  ActionsContainer,
} from "./HomePage.styles";

const HomePage = () => {
  
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  const handleReaction = async (reaction) => {
    console.log("click", reaction);
  };

  return (
    <LayoutSection>
      <ThemeModeContainer onClick={toggleThemeMode}>
        {/* {themeMode === "light" ? <IconDark /> : <IconLight />} */}
        {themeMode === "light" ? "dark" : "light" }
      </ThemeModeContainer>

      <CardList />

      <ActionsContainer>
        <DislikeBtn
          onClick={() => handleReaction(0)}
        >
          x
        </DislikeBtn>

        <LikeBtn
          onClick={() => handleReaction(1)}
        >
          heart
        </LikeBtn>
      </ActionsContainer>
    </LayoutSection>

  )
}

export default HomePage