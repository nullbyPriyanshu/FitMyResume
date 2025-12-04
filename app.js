import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());

app.get('/', (req, res) => res.send('OK'));

app.listen(PORT, () => {
  console.log(`Server up and running on Port:${PORT}`);
});
