import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme['gradient-vertical']};
  width: 232px;
  height: 988px;
  margin: 12px;
  flex-shrink: 0;
  border-radius: 12px;
`;

export const Logo = styled.div`
  padding-top: 2em;
  padding-left: 3em;
`;

export const InitButton = styled.label`
  display: flex;
  padding-top: 64px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-weight: 700;
`;

export const ExplorerButton = styled.label`
  display: flex;
  padding-top: 64px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-weight: 400;
`;

export const LoginButton = styled.label`
  display: flex;
  padding-top: 694px;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;