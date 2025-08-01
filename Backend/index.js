const express = require('express');
const cors = require('cors');
const reputationRoute = require('./routes/reputation');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/reputation', reputationRoute);

app.get('/', (req, res) => {
  res.send('On-Chain Reputation API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
