const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const message = completion.choices[0].message.content;
    res.json({ response: message });
  } catch (error) {
    console.error("AI error:", error.message);
    res.status(500).json({ error: "Failed to generate AI response" });
  }
});

module.exports = router;
