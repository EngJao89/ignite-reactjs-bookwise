import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const TextHeader = styled.span`
  display: flex;
  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
`;

export const InputSearch = styled.div`
  display: flex;
  width: 433px;
  height: 48px;
  padding: 14px 20px;
  margin-left: 420px;
  gap: 8px;
  flex-shrink: 0;
  border: 1px solid;
  border-radius: 4px;
  border-color: ${(props) => props.theme['gray-500']};
`;

export const TextSearch = styled.span`
  flex: 1 0 0;
  color: ${(props) => props.theme['gray-400']};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const ContentTag =styled.div`
  display: flex;
  margin-top: 24px;
`;
