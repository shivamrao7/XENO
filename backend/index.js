const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const customerRoutes = require('./routes/customer');
const orderRoutes = require('./routes/order');
const campaignRoutes = require('./routes/campaign');
const vendorRoutes = require('./routes/vendor');
const receiptRoutes = require('./routes/receipt');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/vendor', vendorRoutes);
app.use('/api/receipts', receiptRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
  });
}).catch(err => console.error(err));
