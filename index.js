const mongoose = require('mongoose');
const app = require('./server');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
