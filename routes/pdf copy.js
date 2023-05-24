// const router = require('express').Router();
// const storage = require('../middlewares/upload')
// const multer = require('multer');
// const csv = require('csv-parser');
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const csvtojson = require('csvtojson');
// const JSONStream = require('JSONStream');
// const path = require('path');

// const upload = multer({ storage: storage });

// router.post("/",  upload.single('csvFile'), async (req,res)=>{
   
//   try {
//     const csvFilePath = req.file.path;
//     const jsonArray = await csvtojson().fromFile(csvFilePath, { encoding: 'utf-8' });

//     // format JSON output
//     const formattedJson = JSON.stringify(jsonArray, null, 2);
//     res.status(200).json(formattedJson);
    
//     // delete the uploaded file
//     fs.unlink(csvFilePath, (err) => {
//       if (err) {
//         console.error(err);
//       }
//     });

//   } catch (error) {
//     res.status(500).json(error);
//   }
    
// });

// module.exports = router;
