import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: space-between;
  align-items: center;
  gap: 16px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 96px;
`;

export const TextHeader = styled.p`
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  gap: 16px;
  margin-top: 72px;
`;

export const TextSubtitle = styled.p`
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const ContainerTrend = styled.div`

`;