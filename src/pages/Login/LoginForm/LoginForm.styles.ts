import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const FormCta = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  
  a {
    color: ${(props) => props.theme.colors.text};
    opacity: .8;
  }
`;
