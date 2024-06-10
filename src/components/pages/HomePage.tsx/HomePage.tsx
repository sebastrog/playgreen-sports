import { useContext, useState } from "react";

import { ThemeContext } from "../../../context/theme/themeContext";

import { allSports } from "../../../services";
import useUpdateReactions from "../../../hooks/user/useUpdateReactions";
import useFetch from "../../../hooks/data/useFetch";

import LayoutSection from "../../layouts/LayoutSection"
import LoadingWrapper from "../../layouts/LoadingWrapper";
import LayoutNotFound from "../../layouts/LayoutNotFound";

import { SportsResponse, Reaction } from "../../../types/sports/sportsBackResponse";

import { IconClose, IconDark, IconHeart, IconLight } from "../../core/Icons";

import {
  ThemeModeContainer,
  CardList,
  LikeBtn,
  DislikeBtn,
  ActionsContainer,
} from "./HomePage.styles";
import Card from "../../core/Card";

const HomePage = () => {
  const { loading, data, error } = useFetch<SportsResponse>(allSports);

  const { addOrUpdateReaction, loading: updateReactionLoading } =
    useUpdateReactions();
  
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0); 

  if (loading) return <LoadingWrapper height="490px" />;
  if (error) return <LayoutNotFound>Error fetching sports.</LayoutNotFound>;

  const handleReaction = async (reaction: number) => {
    if (updateReactionLoading) return;
    
    if (data && data.sports) {
      const currentSport = data.sports[currentIndex];
      const newReaction: Reaction = {
        ...currentSport,
        reaction,
      };
      
      await addOrUpdateReaction(newReaction);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.sports.length);
    }
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
          disabled={updateReactionLoading}
        >
          <IconClose />
        </DislikeBtn>

        <LikeBtn
          onClick={() => handleReaction(1)}
          disabled={updateReactionLoading}
        >
          <IconHeart fill="#ffffff" />
        </LikeBtn>
      </ActionsContainer>
    </LayoutSection>

  )
}

export default HomePage