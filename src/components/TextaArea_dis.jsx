import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const TextArea = styled.textarea`
  width: 50%;
  height: 10rem;
  padding: 0.5rem;
  margin: 1rem;
  resize: none;
  border-radius: 0.5rem;
  border-width: 0;
  background-color: #f5f5f5;
  
`;

const OutputTextArea = ({ title, disabled, value }) => {
  return (
    <Container>
      <TextArea placeholder="Output" value={value} disabled={disabled} />
    </Container>
  );
};

export default OutputTextArea;