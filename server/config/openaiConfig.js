const OpenAI = require('openai'); 

require('dotenv').config(); 

const key = process.env.OPENAI; 


const openai = new OpenAI({ apiKey: key });

module.exports = openai; 