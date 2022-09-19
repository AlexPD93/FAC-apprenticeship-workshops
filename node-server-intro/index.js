const server = require("./server.js");

//Port flexibility
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
