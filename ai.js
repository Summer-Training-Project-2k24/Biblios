const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyABh80gEJruqmVwGEDUktELCIzwQvTpjdg");

async function run(name, problem) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = `You are lord krishna and i want you to write letter to me my name is ${name} and my problem in life is ${problem} and suggest me refreneces from bhagwat geeta as blessings to motivate and be as guide`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run("Arpita","Suggest me be strong...");