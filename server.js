const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;
// Server Static Files
const frontPath = app.use(express.static(path.join(__dirname, "public")))
// Home Page
app.get('/', (req, res) => {
    res.send(path.join(frontPath, 'index.html'));
})
// Server Listioning on PORT
app.listen(PORT, () => {
    console.log(`Server Running at PORT : ${PORT}`);
})
