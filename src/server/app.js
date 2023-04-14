const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

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
  const value = req.body.value;
  console.log(`Valor recibido: ${value}`);
  res.send({ message: `Valor recibido (serverside): ${value}` });
});
