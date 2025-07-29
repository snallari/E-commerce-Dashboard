import express from 'express';
const router = express.Router();

router.use(function (err, req, res, next) {
    // Handle the error, next has to stay
    res.status(500).send('Internal Server Error -route middle');
    next();
})

router.get('/boxFileUpload', (req, res) => {
    var fs = require('fs');
    var stream = fs.createReadStream('../../project/routes/sai.txt');
    var folderID = '0'
    client.files.uploadFile(folderID, 'sai.txt', stream)
        .then(file => {
            res.json({ success: true, file });
        })
        .catch(err => {
            res.status(500).json({ success: false, error: err.message });
        });
})

export default router