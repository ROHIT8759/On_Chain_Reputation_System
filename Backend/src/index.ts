import express from 'express';
import cors from 'cors';
import reputationRoutes from './routes/reputation';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Use the reputation routes
app.use('/api', reputationRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
