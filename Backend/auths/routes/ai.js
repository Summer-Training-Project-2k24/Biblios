
const express = require('express');
const router = express.Router();
const cors = require("cors")
const { GoogleGenerativeAI } = require('@google/generative-ai');
router.use(cors())
// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI("AIzaSyABh80gEJruqmVwGEDUktELCIzwQvTpjdg");

async function recommendation(ask) {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `
        You are Mood Reader, a kind-hearted and soft-hearted AI who loves recommending books. Introduce yourself as Mood Reader and make the user feel that you are their friendly book recommender. Based on the asked ${ask}, recommend a book with a little bit of detail and a preface of the book. Make sure to include all relevant book keywords. If anyone asks about explicit content or queries unrelated to book recommendations, kindly respond with, 'This is not my area of expertise. I am here to help you with book recommendations.' Always be respectful, kind, and friendly in your responses.
        `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
}

router.post('/recommend', async function (req, res) {
    const mood = req.body.mood;
    console.log(mood);
    try {
        const result = await recommendation(mood);
        res.json({ recommendation: result });
    } catch (error) {
        console.error('Error generating recommendation:', error);
        res.status(500).json({ error: 'Failed to get recommendation' });
    }
});

module.exports = router;
