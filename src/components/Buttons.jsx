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
  // box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-width: 0;
  border-color: #c2c2c2;
  color: white;
  font-size: 150%;
  background: ${(props) => (props.active ? "#D10404" : "#c2c2c2")};
  &:hover {
    background-color: #d10404;
    box-shadow: #d10404 0px 6px 12px -2px, #d10404 0px 3px 7px -3px;
  }
`;

const ColorButton = (props) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [tipoEnt, setTipoEnt] = useState("p");

  const handleButtonClick = (buttonIndex, _placeholder, _placeholderDis,tipo) => {
    setActiveButtonIndex(buttonIndex);
    setTipoEnt(tipo)
    props.onButtonClick(buttonIndex, _placeholder, _placeholderDis);
  };

  return (
    <Container>
      <Button
        id="btn1"
        onClick={() =>
          handleButtonClick(
            0,
            "Realice preguntas tecnicas",
            "Después de recibir respuesta, por favor, califiquela",
            "p"
          )
        }
        active={activeButtonIndex === 0}
      >
        Preguntas
      </Button>

      <Button
        id="btn2"
        onClick={() =>
          handleButtonClick(
            1,
            "Es turno del asistente a realizar preguntas",
            "Por favor, respondalas coherentemente",
            "r"
          )
        }
        active={activeButtonIndex === 1}
      >
        Respuestas
      </Button>

      <Button
        id="btn3"
        onClick={() =>
          handleButtonClick(
            2,
            "Escriba palabras tecnicas relacionadas a la reparación",
            "Para este proceso el asistente no dará respuesta",
            "rw"
          )
        }
        active={activeButtonIndex === 2}
      >
        P. Permitidas
      </Button>

      <Button
        id="btn4"
        onClick={() =>
          handleButtonClick(
            3,
            "Escriba palabras que no tengan relación",
            "Para este proceso el asistente no dará respuesta",
            "nrw"
          )
        }
        active={activeButtonIndex === 3}
      >
        P. No Permitidas
      </Button>

      {/* <Button id="btn1"
        onClick={() => handleButtonClick(4)}
        active={activeButtonIndex === 4}
      >
        P. No Permitidas
      </Button> */}
      <br />
      <p id="selectedEnt">{tipoEnt}</p>
    </Container>
  );
};

export default ColorButton;
