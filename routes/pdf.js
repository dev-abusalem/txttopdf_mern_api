const router = require('express').Router();
const storage = require('../middlewares/upload');
const multer = require('multer');
const fs = require('fs');

const upload = multer({ storage: storage });

router.post("/",  upload.single('csvFile'), async (req, res) => {
  try {
    const txtFilePath = req.file.path;

    // Read the file contents
    const fileContents = fs.readFileSync(txtFilePath, 'utf-8');

    // Split the file contents by lines
    const lines = fileContents.split('\n');

    // Get the keys from the first line
    const keys = lines[0].trim().split(' ');

    // Remove the first line from the lines array
    lines.shift();

    // Convert the lines to an array of objects
    const jsonArray = lines.map(line => {
      const values = line.trim().split(' ');
      const obj = {};
      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
      }
      return obj;
    });

    // Send JSON response
    res.status(200).json(jsonArray);

    // Delete the uploaded file
    fs.unlink(txtFilePath, (err) => {
      if (err) {
        console.error(err);
      }
    });

  } catch (error) {
    res.status(500).json(error);
  }  
});

module.exports = router;
