import React from "react";
import styled from "styled-components";

// const PromptTextArea = ({
//   title,
//   placeholder,
//   value,
//   onChange,
//   onSubmit,
//   props,
// }) => {
const PromptTextArea = (props) => {
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
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 0.5rem;
    border-width: 0;
    background-color: #e0e0e0;
  `;

  //   const handleInputChange = (event) => {
  //     setInputValue(event.target.value);
  //   };

  const sendToBackend = (textPrompt) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: textPrompt }),
    };
    fetch("http://localhost:3001/api/receive_prompt", {
      ...requestOptions,
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Enter key was pressed
      sendToBackend(event.target.value);
      event.preventDefault();
    }
  };

  return (
    <Container>
      <TextArea
        placeholder={props.placeholder}
        // value={value}
        // onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
};

export default PromptTextArea;
