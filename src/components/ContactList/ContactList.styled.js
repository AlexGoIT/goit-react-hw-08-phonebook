import styled from 'styled-components';

export const List = styled.ul`
  max-height: calc(100vh - 500px);
  margin-top: 16px;
  padding-block: 4px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    color: aqua;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1976d2;
    border-radius: 10px;
    border: 2px solid #fff;
  }
`;
