const { Configuraton, OpenAIApi } = require('openai'); 

require('dotenv').config(); 

const key = process.env.OPENAI; 

console.log(key); 


const configuration = new Configuraton({
    apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration);