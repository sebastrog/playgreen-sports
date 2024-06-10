import { useContext, useState } from "react";
import { allSports } from "../../../services";

import { ThemeContext } from "../../../context/theme/themeContext";

import useFetch from "../../../hooks/data/useFetch";

import LayoutSection from "../../layouts/LayoutSection"
import LoadingWrapper from "../../layouts/LoadingWrapper";
import LayoutNotFound from "../../layouts/LayoutNotFound";

import { SportsResponse } from "../../../types/sports/sportsBackResponse";

import {
  ThemeModeContainer,
  CardList,
  LikeBtn,
  DislikeBtn,
  ActionsContainer,
} from "./HomePage.styles";
import Card from "../../core/Card";
import { IconClose, IconDark, IconHeart, IconLight } from "../../Icons";

const HomePage = () => {
  const { loading, data, error } = useFetch<SportsResponse>(allSports);
  
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);
  const [currentIndex] = useState(0); 

  if (loading) return <LoadingWrapper height="490px" />;
  if (error) return <LayoutNotFound>Error fetching sports.</LayoutNotFound>;

  const handleReaction = async (reaction:number) => {
    console.log("click", reaction);
  };

  return (
    <LayoutSection>
      <ThemeModeContainer onClick={toggleThemeMode}>
        {themeMode === "light" ? <IconDark /> : <IconLight />}
      </ThemeModeContainer>

      {data?.sports && data.sports.length > 0 ? (
        <CardList>
          <Card
            key={data.sports[currentIndex].idSport}
            title={data.sports[currentIndex].strSport}
            thumb={data.sports[currentIndex].strSportThumb}
          />
        </CardList>
      ) : (
        <LayoutNotFound>No sports found.</LayoutNotFound>
      )}

      <ActionsContainer>
        <DislikeBtn
          onClick={() => handleReaction(0)}
        >
          <IconClose />
        </DislikeBtn>

        <LikeBtn
          onClick={() => handleReaction(1)}
        >
          <IconHeart fill="#ffffff" />
        </LikeBtn>
      </ActionsContainer>
    </LayoutSection>

  )
}

export default HomePage