const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyABh80gEJruqmVwGEDUktELCIzwQvTpjdg");

async function recommandation(ask,reply) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = `You are booklover and i want you to recommand book accoring to the asked ${ask} with little bit of details and preface of the book in ${reply}`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

recommandation("Suggest me book aacording the suspense ","Reaper...");


// app.post('/'(req,res)=>{
//     const name = req.body.name;
//     const problem = req.body.problem;

//     const result = run(name,problem);
//     res.json({letter: result});
// })