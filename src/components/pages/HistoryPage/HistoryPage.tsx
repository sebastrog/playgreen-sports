import { Link } from "react-router-dom";

import useUserReactions from "../../../hooks/user/useUserReactions";

import LayoutSection from "../../layouts/LayoutSection"
import LayoutNotFound from "../../layouts/LayoutNotFound";
import LoadingWrapper from "../../layouts/LoadingWrapper";
import MiniCard from "../../core/MiniCard";
import { FirebaseError } from "../../../types/firebase/firabaseBackErrors.types";
import { Reaction } from "../../../types/sports/sportsBackResponse";

import {
  MiniCardListContainer,
} from "./HistoryPage.styles";

interface MiniCardListProps {
  loading: boolean;
  error: FirebaseError | null | string;
  reactions: Reaction[]
}

const MiniCardList: React.FC<MiniCardListProps> = ({ loading, error, reactions }) => {
  if (loading) return <LoadingWrapper height="490px" />;
  if (error)
    return (
      <LayoutNotFound>
        Error fetching user history reactions.
      </LayoutNotFound>
    );

  return (
    <>
      {reactions?.length > 0 ? (
        <MiniCardListContainer>
          {reactions.map((reaction) => (
            <MiniCard key={reaction.idSport} reaction={reaction.reaction} miniCardTitle={reaction.strSport} miniCardThumb={reaction.strSportThumb} />
          ))}
        </MiniCardListContainer>
      ) : (
        <LayoutNotFound>
          No history found.
          <div><Link to="/home">Start reacting!</Link></div>
        </LayoutNotFound>
      )}
    </>
  );
};

const HistoryPage = () => {
  const { reactions, loading, error } = useUserReactions();

  return (
    <LayoutSection>
      <MiniCardList loading={loading} error={error} reactions={reactions} />
    </LayoutSection>
  )
}

export default HistoryPage