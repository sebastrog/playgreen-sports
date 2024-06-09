import styled from 'styled-components';

export const CustomButton = styled.button`
  padding: 5px 10px;
  border-radius: 25px;
  font-family: 'DM Sans Variable', sans-serif;
  height: 60px;
  min-width: 115px;
  background: rgb(35,107,254);
  background: linear-gradient(90deg, rgba(35,107,254,1) 0%, rgba(13,78,211,1) 50%);
  box-shadow: 0px 4px 30px 0px rgb(34 105 251 / 40%);
  transition: all 0.2s ease-in-out;
  border: 0;
  cursor: pointer;
  font-size: 18px;
  color: white;

  &:hover:not(:disabled) {
    box-shadow: 0px 4px 30px 0px rgb(34 105 251 / 80%);
  }
  
  &:disabled {
    opacity: .7;
    cursor: unset;
  }
`;
