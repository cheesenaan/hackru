const openai = require('./config/openaiConfig')


function isJSONString(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}




export default function open(data){


    const recieveprompt = "below you will be reciving json data that contains information about a persons life. do what you must"; 

    const upperprompt = "Please output in json format like this {'title': 'description', 'title': 'description'} the description must be less than or equal to 20 tokens and the title must be less than or equal to 3 tokens"; 
    const midprompt = "Based on the follow data on want you to predict the future of this persons life use should predict in steps. Remeber the formatting"

    const superprompt = "here is the data"

    async function getResponse(){
        
        let response; 
        let isValid = false; 

        while(!isValid){
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: `${upperprompt} \n ${midprompt} \n ${recieveprompt} \n ${superprompt} \n ${data}` }],
                model: "gpt-3.5-turbo",
                max_tokens: 255,

                temperature: .2,
            });
            
            isValidJSON = isJSONString(response.data.choices[0].text);

            if (!isValidJSON) {
                console.log("Response is not valid JSON, retrying...");
            }
        }
    }

    getResponse(); 

}


