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
    const prompt = "You are going to be given a serious of information about a persons life. The topics of information will be `education`, `employment`, `socialLife`, `loveLife`, and `wishYouNeverDid`. \
    Using this information, you are going to want to generate a timeline of events of that person's life. It will be specified this this format: `{'title': 'text', 'description': 'text'}`. The `title` is the name\
    of the event, and the description is a brief description of what occurred in that event that is meaningful. This description must be at least 20 words long, each. In addition, the title in the output must be named exactly based on what happened, it cannot be named `education`, `employment`, `socialLife`, `loveLife`, and `wishYouNeverDid`\
    . Your output must be completely valid json in the format I previously specified. Must be valid json, \
    and only json outputted. Here is some example input and output:"
    
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

(async () => {
    const result = await createTimeline("{}");
    console.log(result);
})();

module.exports = {
    changeTimeline,
    createTimeline
}
