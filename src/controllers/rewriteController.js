import { askLLM } from '../../llmClient.js';

export const handleRewrite = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'text field required' });

  const prompt = `Rewrite the following resume text to be more professional and ATS-friendly:\n\n"${text}"\n\nReturn only improved text.`;

  const improved = await askLLM(prompt);

  res.json({ improved });
};
