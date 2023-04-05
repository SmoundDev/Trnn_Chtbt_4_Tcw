import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
place-items: center;
margin: 0rem 10% 0 10%;

`;

const Button = styled.button`
  width: 70%;
  height: 900%;
  margin: 1rem;
  border-radius: 0.5rem;
  border-width: 0;
  border-color:#c2c2c2;
  color: white;
  font-size: 150%;
  background: ${(props) => (props.active ? "cyan" : "#c2c2c2")};
  &:hover {
    background-color: #ccc;
  }
`;

const ColorButton = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setActiveButtonIndex(buttonIndex);
  };

  return (
    <Container>
      <Button
        onClick={() => handleButtonClick(0)}
        active={activeButtonIndex === 0}
      >
        Preguntas
      </Button>

      <Button
        onClick={() => handleButtonClick(1)}
        active={activeButtonIndex === 1}
      >
        Respuestas
      </Button>

      <Button
        onClick={() => handleButtonClick(2)}
        active={activeButtonIndex === 2}
      >
        P. Permitidas
      </Button>

      <Button
        onClick={() => handleButtonClick(3)}
        active={activeButtonIndex === 3}
      >
        P. No Permitidas
      </Button>
    </Container>
  );
};

export default ColorButton;
