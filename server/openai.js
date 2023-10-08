const openai = require('./config/openaiConfig')

function open(data){


    const recieveprompt = "below you will be reciving json data that contains information about a persons life. do what you must"; 

    const upperprompt = "Please output in json format like this {'key1': 'value1', 'key2': 'value2'}"; 
    const midprompt = "Based on the follow data on want you to predict the future of this persons life use should predict in steps. Remeber the formatting"

    const superprompt = "here is the data"

    async function getResponse(){
        

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: `${upperprompt} \n ${midprompt} \n ${recieveprompt} \n ${superprompt} \n ${data}` }],
            model: "gpt-3.5-turbo",
          });
        console.log(completion.choices[0]); 
    }
    getResponse(); 

}

open("{'age' : '14', 'intersest' : 'running, jumping, coding'}"); 
