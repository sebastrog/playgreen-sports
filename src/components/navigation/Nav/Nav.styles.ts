import styled from 'styled-components';
import { baseColors } from '../../../styles/theme';

export const NavigationContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.miniCard};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-radius: 15px;
  padding: 10px 15px;
  position: relative;
`
export const NavigationItem = styled.div`
  .nav-element {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 12px;
    transition: background-color 0.2s ease;

    svg {
      width: 20px;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.navigationActive};
    }

    &.active {
      background-color: ${(props) => props.theme.colors.navigationActive};

      svg {
        path {
          fill: ${(props) => props.theme.colors.navigationActiveIcon};
        }
      }
    }
  }
`;