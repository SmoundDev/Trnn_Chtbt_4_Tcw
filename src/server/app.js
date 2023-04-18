const port = process.env.PORT || 3001;
const cors = require("cors");

const express = require("express");
const axios = require("axios");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor corriendo");
});

app.post("/api/feedback", (req, res) => {
  const value = req.body.value;
  const responseMessage = `Gracias, valor recibido: ${value}`;
  console.log(responseMessage);
  res.send({ message: responseMessage });
});

app.listen(port, () => {
  console.log(`escuchando en http://localhost:${port}`);
});

app.post("/api/receive_prompt", (req, res) => {
  const _prompt = req.body.prompt;
  const _tipoent = req.body.tipoent;
  console.log(`Prompt recibido: ${_prompt}`);
  console.log(`TipoEnt Elegido: ${_tipoent}`);
  var response = sendRequestToPy(_prompt, _tipoent);
  res.send({ message: response });
});

const sendRequestToPy = (__prompt, __tipoent) => {
  axios
    .post("http://localhost:3002/", {
      prompt: __prompt,
      tipoent: __tipoent,
    },)
    .then(function (response) {
      // Manejar la respuesta del servidor aquí
      console.log(response.data);
      return response.data;
      
    })
    .catch(function (error) {
      // Manejar los errores aquí
      console.log(error);
    });
};
