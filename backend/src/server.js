import express from 'express';
import multer from 'multer';
import path from 'node:path';
import {rootDir} from '../root.js'
import { nanoid } from 'nanoid';
import { TestQueue } from './helper/testQueue.js';
import { fileURLToPath } from 'url';

const PORT = 3000;
const tque = new TestQueue()
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, rootDir + '/uploads/input');
  },
  filename: (req, file, cb) => {
    cb(null, `${nanoid(11)}` + `${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  tque.addNode(req.file.filename.split(".")[0])
  res.send(`File uploaded: ${req.file.filename}`);
});
app.get('/:x', (req, res) => {
  console.log(req.params.x)
  const name = (req.params.x).split(".");
  res.sendFile(rootDir + '/uploads/result/'+name[0].slice(0,11)+'/'+req.params.x)
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



