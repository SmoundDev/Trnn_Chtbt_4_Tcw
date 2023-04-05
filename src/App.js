import React from 'react';
import styled from 'styled-components';

import PromptTextArea from './components/Textarea';
import ColorButton from './components/Buttons';
import OutputTextArea from './components/TextaArea_dis';
import Separator from './components/SeparatorLine'

function App() {

  
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
// margin: 0rem 10% 0 30%;
`;
 
  return (
    <div className="App">
      <Container><h1>Selecciona un tipo de entrenamiento</h1></Container>
      <ColorButton />
      <PromptTextArea />
      <Separator></Separator>
      <OutputTextArea></OutputTextArea>
    </div>
  );
}

export default App;