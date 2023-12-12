import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: space-between;
  gap: 40px;
`;

export const ImageContainer = styled.div`
  background-color: ${(props) => props.theme['gradient-vertical']};
  flex-shrink: 0;
  opacity: 0.85;
`;

export const MainSection = styled.section`
  color: ${(props) => props.theme.white};
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  text-align: center;
`;

export const SubTitleSection = styled.section`
  color: ${(props) => props.theme.white};
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
`;