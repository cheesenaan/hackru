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

async function changeTimeline(timline, change){
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


async function createTimeline(data){
    const prompt = "You are going to be given a series of information about a persons life. The topics of information will be `education`, `employment`, `socialLife`, `loveLife`, and `wishYouNeverDid`. \
    Using this information, you are going to want to generate a timeline of events of that person's life. It will be specified this this format: `{'title': 'text', 'description': 'text'}`. The `title` is the name \
    of the event, and the description is a description of what occurred in that event that is meaningful. Each description in each event must be more than 20 words. I repeat, EACH DESCRIPTION MUST BE MORE THAN 20 WORDS. In addition, the title of the event \
    must be named exactly based on what happened. Your title cannot be called: `education`, `employment`, `socialLife`, `loveLife`, and `wishYouNeverDid`\
    . Your output must be completely valid json and must, MUST MUST be same format as this example: "
    
    const context = `${context6}`; 

    async function getResponse(){
        let isValid = false; 
        while(!isValid){
            const completion = await openai.chat.completions.create({
                messages: [{role: 'system', content: `${prompt} \n ${context}`}],
                model: "gpt-3.5-turbo",
                max_tokens: 600,

                temperature: .1,
            }) 
            isValid = isJSONString(completion.choices[0].message.content);

            if(!isValid) {
                console.log("invalid json")
                continue
            }

            console.log(completion.choices[0].message.content);
            return(completion.choices[0].message.content); 
        }
    }
    
    return(await getResponse()); 
}


module.exports = {
    changeTimeline,
    createTimeline
}
