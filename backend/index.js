const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Olá do backend vezes 2!" });
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
