const multer = require("multer");
const path = require("path");
const fs = require("fs");

module.exports = (destination) => {
  const storage = multer.diskStorage({
    destination: (req, res, cb) => {

      if (!fs.existsSync(path.join(__dirname, "../../public/avatar"))) {
        fs.mkdirSync(path.join(__dirname, "../../public/avatar"));
    } else if (!fs.existsSync(path.join(__dirname, "../../public/berkas"))) {
        fs.mkdirSync(path.join(__dirname, "../../public/berkas"));
      }
      if (destination == "user") {
        cb(null, path.join(__dirname, "../../public/avatar"))
    }else if (destination == "berkas") {
        cb(null, path.join(__dirname, "../../public/berkas"));
      }
    },
    filename: (req, file, cb) => {
    
      cb(null, Date.now().toString().concat(".", file.mimetype.split("/")[1]));
      
    },
  });

  const upload = multer({
    storage,
    limits: {
      fieldSize: "1MB",
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else if (file.mimetype == "application/pdf") {
        cb(null, true);
      }
      else {
        cb("file is not supported", false);
      }
    },
  });

  return upload;
};