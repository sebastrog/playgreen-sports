interface CardProps {
  thumb: string;
  title: string;
}

import {
  CardContainer,
  Title,
} from "./Card.styles";

const Card: React.FC<CardProps> = ({ thumb, title}) => {
  return (
    <CardContainer>
      <img src={thumb} alt={`${title} sport image`} />
      <Title>{title}</Title>
    </CardContainer>
  );
};

export default Card;
