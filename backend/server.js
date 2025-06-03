const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
});

app.use('/api/customers', require('./routes/customers'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/campaigns', require('./routes/campaigns'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/receipts', require('./routes/receipts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
