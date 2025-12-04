import express from 'express';
import 'dotenv/config';
import uploadRouter from './src/routes/upload.js';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());

app.get('/', (req, res) => res.send('OK'));

app.use('/api', uploadRouter);

app.listen(PORT, () => {
  console.log(`Server up and running on Port:${PORT}`);
});
