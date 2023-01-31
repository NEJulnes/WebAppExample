const express = require('express'), app = express(), path = require('path'), port = process.env.port || 1337;
// relative path
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join('public', 'index.html'));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map