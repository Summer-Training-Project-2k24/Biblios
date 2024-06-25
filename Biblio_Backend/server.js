const express = require('express');
const fs = require('fs');



const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'Biblio_Frontend' )));
// Define routes for each HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Biblio_Frontend', 'public', 'index.html'));
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
