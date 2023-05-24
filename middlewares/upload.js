const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExt = file.originalname.split(".").pop();
      cb(null, file.fieldname + '-' + uniqueSuffix + "."+fileExt)
    }
  })
  

  module.exports = storage;