import express from 'express';
import multer from 'multer';

import path from 'node:path';
import { nanoid } from 'nanoid';
import { TestQueue } from './helper/testQueue.js';
const app = express();
const PORT = 3000;
const tque = new TestQueue()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads/input');
  },
  filename: (req, file, cb) => {
    cb(null, `${nanoid(11)}` + `${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });
app.use(express.static('public'))
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  tque.addNode(req.file.filename.split(".")[0])
  res.send(`File uploaded: ${req.file.filename}`);
});
app.get('/video', (req, res) => {
    // Ensure you have a 'video.mp4' file in your project directory
    res.sendFile('C:/Users/arbaa/current_working_project/backend/uploads/input/SVgxdpZNlRJ.mp3')
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



