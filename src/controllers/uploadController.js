import fs from 'fs';
import pdfParse from 'pdf-parse';

export const handleUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: 'No file uploaded. Use form field "resume".',
    });
  }

  try {
    const fileBuffer = fs.readFileSync(req.file.path);
    const data = await pdfParse(fileBuffer);

    res.json({
      message: 'PDF Parsed SuccessFully',
      text: data.text,
      length: data.text.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to parse PDF' });
  }
};
