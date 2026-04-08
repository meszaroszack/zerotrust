const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'zerotrust_home.html'));
});

app.listen(PORT, () => {
  console.log(`ZeroTrust server running on port ${PORT}`);
});
