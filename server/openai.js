const openai = require('./config/openaiConfig'); 
const { context1, context2, context3 } = require('./context'); 

function isJSONString(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

export async function open(data){
    const recieveprompt = "below you will be reciving json data that contains information about a persons life. do what you must"; 
    const cont = "here are some examples for you"; 
    const context = `${context1} \n ${context2}`; 
    

    const upperprompt = "Please output in json format like this {'title': 'description', 'title': 'description'} the description must be less than or equal to 44 tokens and the title must be less than or equal to 8 tokens you can add as many steps as you want. minium of 245 total tokens"; 
    const midprompt = "Based on the follow data on want you to predict the future of this persons life use should predict in steps. Remeber the formatting. also age does not indicate the length of your output. Also be definite in your responses"

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

            

            isValid = isJSONString(completion.choices[0].message.content);
            console.log(isValid)
            //isValid=true

            if (!isValid) {
                console.log("Response is not valid JSON, retrying...");
            }
            //console.log(completion.choices[0]);
            return(completion.choices[0]); 
            
        }

       
    }

    return(getResponse()); 

}

export async function timeline(change, timline){
    const prompt1 = "you are going to get timline data of a person in json format like this {{'title' 'description'}, {'title' : 'description'}, {'title' : 'descrition}}"; 
    const prompt2 = "You will be given a information on what has changed and you should generate a new timline in the same format accordingly"; 
    const prompt3 = "this is the change: "; 
    const prompt4 = "here is the timeline"; 
    
    async function getResponse(){
        let isValid = false; 

        while(!isValid){
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: `${prompt1} \n ${prompt2} \n ${prompt3} ${change} \n ${prompt4} \n ${timline}` }],
                model: "gpt-3.5-turbo",
                max_tokens: 600,

                temperature: .1,
            });
            isValid = isJSONString(completion.choices[0].message.content);
            console.log(isValid)
            //isValid=true

            if (!isValid) {
                console.log("Response is not valid JSON, retrying...");
            }
            //console.log(completion.choices[0]);
            return(completion.choices[0]); 
        }
    }
    return(getResponse()); 

}

(async () => {
    const result = await open("{'basic informtion': 'my name is john and I am 12'}, {'interests: 'running, swimming and skating'}");
    console.log(result);
})();

module.exports = {
    open,
    timeline
}
