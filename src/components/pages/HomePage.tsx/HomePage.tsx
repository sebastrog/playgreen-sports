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
import Card from "../../core/Card";

const HomePage = () => {
  
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  const handleReaction = async (reaction:number) => {
    console.log("click", reaction);
  };

  return (
    <LayoutSection>
      <ThemeModeContainer onClick={toggleThemeMode}>
        {/* {themeMode === "light" ? <IconDark /> : <IconLight />} */}
        {themeMode === "light" ? "dark" : "light" }
      </ThemeModeContainer>

      <CardList>
        <Card
          title="Soccer"
          thumb="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/640px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg"
        />
      </CardList>

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