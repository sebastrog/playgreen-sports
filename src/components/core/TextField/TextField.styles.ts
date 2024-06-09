import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  position: relative;
`;

export const InputCustom = styled.input.attrs({
  autoComplete: 'off'
})`
  background-color: ${(props) => props.theme.colors.miniCard};
  border-radius: 18px;
  height: 60px;
  padding: 15px 20px 0 20px;
  border: 0;
  width: 100%;
  color: ${(props) => props.theme.colors.input};
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #000;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 8px;
    left: 20px;
    font-size: 14px;
    
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 20px;
  top: 22px;
  color: ${(props) => props.theme.colors.label};
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: .6;
`;