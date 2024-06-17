import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
const __currentDir = path.dirname(fileURLToPath(import.meta.url));

const storageDefinition = (destination) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destination);
    },
    filename: function (req, file, cb) {
      console.log(file, "this is file");
      cb(
        null,
        `${req.body.name}-${Math.floor(
          1000 + Math.random() * 9000
        )}${path.extname(file.originalname)}`
      );
    },
  });
};

const storeFile = (destination) => {
  const __dirname = path.join(__currentDir, "..", "/assets/images");
  const storage = storageDefinition(path.join(__dirname, destination));
  return multer({ storage: storage });
};

const upload = multer();

export { storeFile, upload };
