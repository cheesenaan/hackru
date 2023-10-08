const openai = require('./config/openaiConfig'); 
const { context1, context2, context3, context4, context5, context6 } = require('./context'); 

function isJSONString(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

/*
async function open(data){
    const recieveprompt = "below you will be reciving json data that contains information about a persons life. do what you must"; 
    const cont = "here are some examples for you"; 
    const context = `${context1} \n ${context2} \n ${context3}`; 
    
    const upperprompt = "Please output in json format like this {'title': 'text', 'description': 'text'} the description must be less than or equal to 44 tokens and the title must be less than or equal to 8 tokens. The list of nodes must be a minimum of 245 total tokens."; 
    const midprompt = "Based on the follow data, predict the future of this persons life. Remeber the json formatting specified. Also age does not indicate the length of your output. Be definite in your responses."

    const superprompt = "here is the data"

    async function getResponse(){        
        let isValid = false; 

        while(!isValid){
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: `${upperprompt} \n ${midprompt} \n ${recieveprompt} \n ${superprompt} \n ${cont} \n ${context} \n ${data}` }],
                model: "gpt-3.5-turbo",
                max_tokens: 600,

                temperature: .1,
            });

            const output = completion.choices[0].message.content

            isValid = isJSONString(output);
            console.log("the content " + output)

            if (!isValid) {
                console.log("Response is not valid JSON, retrying...");
                continue
            }

            return(output); 
            
        }

       
    }

    return(await getResponse()); 

}
*/

async function timeline(change, timline){
    const prompt1 = "You are going to get timline data of a person's life in a json format like this {{'title': 'text', 'description': 'text'}, {'title': 'text', 'description': 'text'}, {'title': 'text', 'description': 'text'}}"; 
    const prompt2 = "You will be given a information on what has changed and you should generate a new timline in the same format accordingly. The list of timeline nodes must be a minimum of 245 total tokens."; 
    const cont = "here is an example of what you should output based on input. they are shown as json documents"
    const context = `${context1}`
    const prompt3 = "this is the change: "; 
    const prompt4 = "here is the timeline"; 
    
    async function getResponse(){
        let isValid = false; 

        while(!isValid){
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: `${prompt1} \n ${prompt2} ${cont} \n ${context} \n ${prompt3} ${change} \n ${prompt4} \n ${timline}` }],
                model: "gpt-3.5-turbo",
                max_tokens: 600,

                temperature: .1,
            });
            isValid = isJSONString(completion.choices[0].message.content);
            console.log(isValid)
            //isValid=true

            if (!isValid) {
                console.log("Response is not valid JSON, retrying...");
                continue
            }
            //console.log(completion.choices[0]);
            return(completion.choices[0].message.content); 
        }
    }
    return(await getResponse()); 

}


async function newprompt(data){
    const prompt1 = "Please output in json format like this {'title': 'text', 'description': 'text'} the description must be less than or equal to 44 tokens and the title must be less than or equal to 8 tokens. The list of nodes must be a minimum of 245 total tokens."; 
    const prompt2 = "Based on the follow data, predict the future of this persons life. Remeber the json formatting specified. Also age does not indicate the length of your output. Be definite in your responses."
    const cont = "here are some examples of what to output based on an input"; 
    const context = `${context6}`; 

    const prompt3 = "here comes the data"; 

    async function getResponse(){
        let isValid = false; 
        while(!isValid){
            const completion = await openai.chat.completions.create({
                messages: [{role: 'system', content: `${prompt1} \n ${prompt2} \n ${cont} \n ${context} \n ${prompt3} \n ${data}`}],
                model: "gpt-3.5-turbo",
                max_tokens: 600,

                temperature: .1,
            }) 
            isValid = isJSONString(completion.choices[0].message.content);

            if(!isValid) {
                continue
            }

            console.log(completion.choices[0].message.content);
            return(completion.choices[0].message.content); 
        }
    }
    
    return(await getResponse()); 
}

(async () => {
    const result = await newprompt("{}");
    console.log(result);
})();

module.exports = {
    open,
    timeline,
    newprompt
}
