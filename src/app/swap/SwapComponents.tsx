import React from 'react';
import styled from 'styled-components';

// Container for the entire swap interface
const SwapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

// Bubble-like container for individual token inputs
const TokenContainer = styled.div`
  background: linear-gradient(135deg, grey, chartreuse);
  border-radius: 50px;
  padding: 20px;
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
`;

// Styled input for token amount
const TokenInput = styled.input`
  border: none;
  background: none;
  outline: none;
  font-size: 24px;
  text-align: center;
  color: white;
  width: 100%;
`;

// Button for flipping tokens and swapping
const ActionButton = styled.button`
  background: linear-gradient(135deg, grey, chartreuse);
  border: none;
  border-radius: 50px;
  padding: 15px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  margin: 0 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SwapComponents = () => {
  return (
    <SwapContainer>
      <TokenContainer>
        <TokenInput placeholder="0.0" />
        <span>Token A</span>
      </TokenContainer>
      <ActionButton>⇄</ActionButton>
      <TokenContainer>
        <TokenInput placeholder="0.0" />
        <span>Token B</span>
      </TokenContainer>
      <ActionButton>Swap</ActionButton>
    </SwapContainer>
  );
};

export default SwapComponents;
