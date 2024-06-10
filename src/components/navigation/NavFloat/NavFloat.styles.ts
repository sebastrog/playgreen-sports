import styled from "styled-components";

export const NavFloatContainer = styled.div`
  position: absolute;
  bottom: 70px;
  background-color: ${(props) => props.theme.colors.miniCard};
  right: 0;
  width: 200px;
  border-radius: 15px;
`

export const NavFloatItem = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
  padding: 5px;
  color: ${(props) => props.theme.colors.text};

  .nav-float-item-text,
  .nav-float-item-cta {
    display: flex;
    align-items: center;
    gap:10px;
    padding: 10px 15px;
    color: ${(props) => props.theme.colors.text};
    width: 100%;
    font-size: 16px;

    .ellipsis {
      display: inline-block;
      width: 132px; 
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: middle;
    }
  }
  
  .nav-float-item-cta {
    cursor: pointer;
    border-radius: 12px;
    transition: background-color 0.1s ease-in-out;
    
    &:hover {
      background-color: ${(props) => props.theme.colors.background};
    }
  }
`

export const NavFloatIcon = styled.div`
  width: 18px;
  flex: none;
  display: flex;
  align-items: center;

  svg, img {
    width: 100%;
  }
`

