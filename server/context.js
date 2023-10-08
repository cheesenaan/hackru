const context1 = `input: 
{ "timeline" : 
    [
        {"title" : "winning karater tornament", "description" : "I went to ABC elementary school and won the karate tornament", "alternateChoices" : ["I assaulted my teacher getting kicked out of school", "I did not attend the karater tornument"]}, 
        {"title" : "punched bob in the face", "description" : "I attended ZYZ high school, but I punched bob in the face. He was severly injured leading to jail time", "alternateChoice" : ["I did not punch bob in the face", "I punched joe in the face"]}, 
        {"title" : "in jail", "description" : "In jail I was extremly well behaved. I stayed out of a fight", "alternateChoices" : ["I was not well behaved and got time added", "I did not stay out of the fight and got arm broken"]},
    ],

    {
        "title" : "punching bob", "alternateChoice" : "I wish I had not punched bob in the face" 
    }
}

output : 

[
    {"title" : "winning karater tornament", "description" : "I went to ABC elementary school and won the karate tornament", "alternateChoices" : ["I assaulted my teacher getting kicked out of school", "I did not attend the karater tornument"]},
    {"title" : "I held back from hurting bob", "description": "I went to ZYZ high school and did not punch bob. I was a high achiever", "alternateChoices" : ["I punched joe in the face", "I punched bob in the face]},
    {"title" : "I am an overachevier", "description" : "I attended harvard university. I also stayed away for Jane", "alternateChoices" : ["I did not stay away from Jane", "I dropped out of harvard"]},

]

`; 



const context6 = `input : 
{
    "education": "I attended XYZ School for my primary education. One notable event during that time was winning the science fair in fifth grade. For my higher education, I went to ABC University, where I majored in Computer Science.",
    "employment": "I am currently working as a software developer at XYZ Company. I enjoy my job, but I wish I had more opportunities for professional growth. In the past, I worked at DEF Corporation as a junior developer, where I gained valuable experience.",
    "socialLife": "My social life is quite active. I have a close-knit group of friends, and we often organize get-togethers and outings. One notable event was a recent trip to the mountains with my friends.",
    "loveLife": "I'm currently in a happy relationship with my partner. In the past, I've had a few relationships that didn't work out due to differences in goals and values. I wish some of those relationships had lasted longer.",
    "wishYouNeverDid": "One thing I wish I never did was procrastinate on an important project, which resulted in a lot of stress and missed deadlines.",
}


  output : 
  
  [
    {"title" : "Won science fair", "description": "I began with eduaction at XYZ school where I won the science fair.", "alternateChoices" : ["I slept in before the science fair", "I studied harder"]},
    {"title : "Teenager", "description": "I was quite social but started to develop a closley knit friend group. I dated a bit and went on a trip with my friends. I regret missing an imporant project", "alternateChoices" : ["I did not date", "I did not go on the friend trip"]},
    {"title" : "Never went on a trip", "description": "I started college, but regret not taking a gap year.", "alternateChoices" : ["I took a gap year", "I joined a fraternity"]},
    {"title" : "Young adult", "description": "I began a job at DEF corp as a juinor dev after majoring in computer science at ABC university.", "alternateChoices" : ["I majored in business", "I dropped out of college"]},
    {"title" : "Adulthood", "description": "I progressed to a job at XYZ company as a software developer. I am in a happy relaionship but wish more oppurtunites for growth", "alternateChoices" : ["I broke up with my girlfriend", "I seized the oppurtunites in the office"]},
]

  
  `
module.exports = context1, context2, context3, context4, context5, context6;  