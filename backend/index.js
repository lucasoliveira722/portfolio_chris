import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let objetos = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image: "https://picsum.photos/800/400?random=1"
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: "https://picsum.photos/800/400?random=2"
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    image: "https://picsum.photos/800/400?random=3"
  }
];

app.get("/api/hello", (req, res) => {
  res.json({ message: "Olá do backend!" });
});

app.get("/api/objects", (req, res) => {
  res.json(objetos);
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
