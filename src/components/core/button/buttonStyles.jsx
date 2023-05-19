import styled from "styled-components";

export const BaseButton = styled.button`
  padding: 6px 20px;
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  color: black;
  border-radius: 6px;
  cursor: pointer;
  transition: 300ms ease-in-out all;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #f6c605;
  color: black;
  border: 1px solid black;

  &:hover {
    background: #ddb204;
  }
`;
