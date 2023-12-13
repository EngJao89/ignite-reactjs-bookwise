import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: space-between;
  gap: 40px;
`;

export const ImageContainer = styled.section`
  background-image: ${(props) => props.theme['gradient-horizontal']};
  filter: opacity(50%);
  width: 598px;
  height: 912px;
  flex-shrink: 0;
  opacity: transparent;
`;

export const TextLogo = styled.text`
  color: var(--gradient-horizontal, linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%));
  padding-left: 183px;
  font-family: Nunito Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 57.6px */
`;

export const MainSection = styled.section`
  margin-top: 245px;
  margin-left: 194px;
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

export const CardHome = styled.button`
  background: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme.white};
  display: flex;
  width: 372px;
  padding: 20px 24px;
  margin-bottom: 16px;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
`;
