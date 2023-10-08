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

async function changeTimeline(timeline, change){
    const prompt = "You are going to be given a series of information about a persons life. It will be a timeline of events in a specific json format. This is that person's information: " + timeline + ". In addition, you will be given a change \
    to one of the events. This is that change: " + change + ". You must produce a new timeline based on this change (it must not be the same as the new description), and make sure you change the corresponding events title. You must must must output completely valid json, and only json. This is an example of the output: "

    const context = `${context6} \n and another example \n ${context1}`

    console.log("previous timeline: " + timeline)
    
    async function getResponse(){
        let isValid = false; 

        while(!isValid) {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: `${prompt} \n ${context}` }],
                model: "gpt-3.5-turbo",
                max_tokens: 600,

                temperature: .1,
            });
            isValid = isJSONString(completion.choices[0].message.content);
            console.log(isValid)

            if (!isValid) {
                console.log("Response is not valid JSON, retrying...");
                continue
            }

            console.log(completion.choices[0].message.content);
            return(completion.choices[0].message.content); 
        }
    }
    return(await getResponse()); 

}


async function createTimeline(data){
    const prompt = "You are going to be given a series of information about a persons life. The topics of information will be `education`, `employment`, `socialLife`, `loveLife`, and `wishYouNeverDid`. \
    Using this information, you are going to want to generate a timeline of events of that person's life. This is that person's information: " + data + ". It will be specified this this format: `{'title': 'text', 'description': 'text', `alternateChoices`: [`text`, `text`]}`. The `title` is the name \
    of the event, and the description is a description of what occurred in that event that is meaningful. The alternate choices are each possible difference in that event that would be a meaningful change. \
    Have at least 1 difference in the output. Each description in each event must be more than 20 words. I repeat, EACH DESCRIPTION MUST BE MORE THAN 20 WORDS. In addition, the title of the event \
    must be named exactly based on what happened. Your title cannot be called: `education`, `employment`, `socialLife`, `loveLife`, and `wishYouNeverDid`\
    . Your output must be completely valid json (and must be in chronological order) and must be relevant to the information I previously provided, MUST MUST include the same fields and be the same format as this example: "
    
    const context = `${context6} \n and another example \n ${context1}` 

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
