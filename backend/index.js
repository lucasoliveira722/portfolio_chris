import express from "express";
import cors from "cors";
import objectRoutes from './src/routes/object.routes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/objects', objectRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
