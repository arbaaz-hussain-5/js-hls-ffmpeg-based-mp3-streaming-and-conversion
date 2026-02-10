import fs from 'node:fs/promises';

export default async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`File deleted: ${filePath}`);
  } catch (err) {
    console.error('Error while deleting file:', err.message);
  }
}

