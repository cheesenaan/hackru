const openai = require('./config/openaiConfig')

function open(data){


    const recieveprompt = "below you will be reciving json data that contains information about a persons life. do what you must"; 

    const upperprompt = "Please output in json format like this {'key1': 'value1', 'key2': 'value2'}"; 
    const midprompt = "Based on the follow data on want you to predict the future of this persons life. Remeber the formatting"

    const superprompt = "here is the data"

    async function getResponse(){
        const completion = await openai.completions.create({
            model: "gpt-3.5-turbo", 
            prompt: `${upperprompt} \n ${midprompt} \n ${recieveprompt} \n ${superprompt} \n ${data}`, 
            max_tokens: 22, 
            temperature: .2,
        }); 
        console.log(completion); 
    }
    getResponse(); 

}

open("{'age' : '14', 'intersest' : 'running, jumping, coding'}"); 
