import { useNavigate } from 'react-router-dom';

import useTheme from "../../hooks/theme/useTheme";

import HistoryPage from "../../components/pages/HistoryPage";
import LayoutHeading from "../../components/layouts/LayoutHeading";
import { IconArrowBack } from '../../components/core/Icons';

const History = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}><IconArrowBack fill={theme?.colors.text} /></button>
      <LayoutHeading>
        <h2 className="title">History</h2>
        <p className="text">This is the history of all your reactions</p>
      </LayoutHeading>

      <HistoryPage />
    </>
  );
};

export default History;
