const express = require('express');
const app = express();
const DbConnect = require('./config/DbConnect');

//middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('uploads'));

//routes
// const resumeRoutes = require('./routes/resumeRoutes');

//connecting to the database
DbConnect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  });