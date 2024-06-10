import useTheme from '../../../hooks/theme/useTheme';
import { IconHeart, IconClose } from '../Icons';

import { CardContainer, CardHero, Title,  CardStatus } from './MiniCard.styles'

interface MiniCardProps {
  miniCardThumb: string;
  miniCardTitle: string;
  reaction: number;
}

const MiniCard: React.FC<MiniCardProps> = ({reaction, miniCardTitle, miniCardThumb}) => {
  const theme = useTheme();

  return (
    <CardContainer>
      <CardHero>
        <img src={miniCardThumb} alt="f1 car" />
        <Title>{miniCardTitle}</Title>
      </CardHero>
      <CardStatus>
        {reaction === 1 ? <IconHeart fill={theme?.colors.miniCardHeart} /> : <IconClose />}
      </CardStatus>
    </CardContainer>
  )
}

export default MiniCard;