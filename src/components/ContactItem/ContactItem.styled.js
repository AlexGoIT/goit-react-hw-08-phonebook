import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;

  :first-child {
    margin-right: auto;
  }

  button {
    height: 35px;
    margin-left: 16px;
    margin-right: 8px;
    border: none;
    border-radius: 6px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  button:is(:hover, :focus) {
    background-color: #ff8585;
  }
`;
