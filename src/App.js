import React, { useState } from "react";
import styled from "styled-components";

import PromptTextArea from "./components/Textarea";
import ColorButton from "./components/Buttons";
import OutputTextArea from "./components/TextaArea_dis";
import Separator from "./components/SeparatorLine";

function App() {
  const [placeholder, setPlaceholder] = useState(
    "Seleccione un tipo de entrenamiento"
  );
  const [placeholderDis, setPlaceholderDis] = useState(
    "Seleccione un tipo de entrenamiento"
  );

  const [disableInput, setDisableInput] = useState(false);
  const [disableOutput, setDisableOutput] = useState(true);
  //  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    // box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
    //   rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 0.5rem 0.5rem 0 0;
    // border-width: 0;
    background-color: #d5010f;
    color: white;
    // padding: 0rem 0% 1rem 30%;
  `;

  const ContainerButton = styled.div`
    display: block;
    flex-direction: row;
    // align-items: center;
    // justify-content: center;
    // // padding: 1rem 20rem;
    box-shadow: #fff 0px 10px 15px -3px, #009ac1 0px 4px 6px -2px;
    border-radius: 0rem 0 0.5rem 0.5rem;
    // border-width: 0;
    background-color: #f2f2f2;
    // color: white;
    // margin: 10%;
    padding: 3%;
  `;

  const DivContainer = styled.div`
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 100.32) 0px 2px 16px 0px;
    background-color: #000000;
    padding: 3%;
  `;

  const handleButtonClick = (buttonIndex, text, textDis) => {
    switch (buttonIndex) {
      case 0:
        setPlaceholder(text);
        setPlaceholderDis(textDis);

        setDisableInput(false);
        setDisableOutput(true);
        break;
      case 1:
        setPlaceholder(text);
        setPlaceholderDis(textDis);

        setDisableInput(true);
        setDisableOutput(false);
        break;
      case 2:
        setPlaceholder(text);
        setPlaceholderDis(textDis);

        setDisableInput(false);
        setDisableOutput(true);
        break;
      case 3:
        setPlaceholder(text);
        setPlaceholderDis(textDis);

        setDisableInput(false);
        setDisableOutput(true);

        break;

      default:
        break;
    }

    console.log("in:" + disableInput);
    console.log("out:" + disableOutput);
    console.log(text);
    console.log(textDis);
    console.log(buttonIndex);
    // setActiveButtonIndex(buttonIndex);
  };

  return (
    <DivContainer>
      <Container>
        <h1>Selecciona un tipo de entrenamiento</h1>
      </Container>
      <ContainerButton>
        <div>
          <ColorButton onButtonClick={handleButtonClick} />
          <PromptTextArea placeholder={placeholder} disabled={disableInput} />
          <Separator></Separator>
          <OutputTextArea
            placeholder={placeholderDis}
            disabled={true}
          />
        </div>
      </ContainerButton>
    </DivContainer>
  );
}

export default App;
