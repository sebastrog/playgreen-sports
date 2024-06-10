import styled from 'styled-components';

interface HeadingProps {
  $textAlign: 'center' | 'right' | 'left';
}

export const Heading = styled.div<HeadingProps>`
  margin-bottom: 25px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  text-align: ${(props) => props.$textAlign};

  .title {
    font-size: 42px;
    color: ${(props) => props.theme.colors.title};
  }

  .text {
    font-size: 18px;
    color: ${(props) => props.theme.colors.text};
    opacity: .8;
  }
`;
