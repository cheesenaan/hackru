const context1 = " input : {{'basic information' : 'My name is john and I am 22 years old'}, {'education' : 'I am currently completing my masters degree in  data science'}, {'how do you spend your time' : 'I enjoy playin frisbee golf'}} output: {{'educate' : 'you complete your masters degree'}, {'before you get you first job you break you leg playing frisbee golf'}, {'recover' : 'you recover hastly from you injury'}, {'golf' : 'you stop playin frisbee golf and focus on your career'}, {'return' : 'you return to school and get your doctorate'}}"; 
const context2 = "input : {{'basic information' : 'My name is jose and I am a 45 year old carpenter'}, {'education' : 'I completed high school, but I have a passion for reading'}, {'how is your time spent' : ''}, {}}"; 
const context3 = "input : {{'basic information : 'My name is Benny and I am a 84 year old retired indivduals'}, {'education' : 'I graduated college with a bachelors in economics'}, {'what is your greatest success' : 'My five children'}} output: { {'In the sunset' : 'You move to Nevada to retire'}, {'relationship' : 'you maintain a strong relationship with your children'} , {'passing' : 'you pass away peacfully in your bed'} }";  
const context4 = "input : {{'about me' : 'My name is Ronald I am a 17 year old high school student'}, {'life events' : 'I broke my arm in third grade. I made the freshaman baseball team. I aced algebra. I had my first kiss as a sophmore'}} output: {{'begining of life' : 'you where born and had a traditonal childhood'}, {'childhood' : 'you later broke your arm}, {'high school stunts' : 'you made the freshaman football team. then aced alebgra. Then you had your fist kiss as a sophmore'}}"; 
const context5 = "input : {{'about me' : 'My name is Lisa and I am a 55 year old hedge fund manager'}, {'life events' : 'I played softball as a elementary school student. I had my first boyfriend in 7th grade. I met my future husbund in 11th grade. I went to NYU and graduated with a degree in finace. I then got my MBA at NYU. I married my husbund. I went from job to job when I found where I work curretnly'}} output : {{'childhood' : 'I was born. then I went to elementary school were I started playing softball. I began dating my first boyfriend in 7th grade'}, {'high school fun' : 'I met my future husbund in 11th grade'}, {'college fun : I graduated with a degree in finace from NYU. I got my MBA on NYU.'}, {'adult life' : 'I married my husbund. I then went from job to job. I then made it to my curretnly company where I work today'}}"
const context6 = `input : {
    "education": "I attended XYZ School for my primary education. One notable event during that time was winning the science fair in fifth grade. For my higher education, I went to ABC University, where I majored in Computer Science.",
    "employment": "I am currently working as a software developer at XYZ Company. I enjoy my job, but I wish I had more opportunities for professional growth. In the past, I worked at DEF Corporation as a junior developer, where I gained valuable experience.",
    "socialLife": "My social life is quite active. I have a close-knit group of friends, and we often organize get-togethers and outings. One notable event was a recent trip to the mountains with my friends.",
    "loveLife": "I'm currently in a happy relationship with my partner. In the past, I've had a few relationships that didn't work out due to differences in goals and values. I wish some of those relationships had lasted longer.",
    "freeLife": "In my free time, I enjoy reading, hiking, and playing the guitar. These activities help me relax and unwind after a busy workweek.",
    "religionAndBeliefs": "I consider myself agnostic and open to various spiritual beliefs. I believe in treating others with kindness and respect. This belief has guided me in making ethical decisions in my personal and professional life.",
    "wishYouNeverDid": "One thing I wish I never did was procrastinate on an important project, which resulted in a lot of stress and missed deadlines.",
    "wishYouDid": "I wish I had taken a gap year to travel and explore different cultures before starting my career. It's something I've always wanted to do."
  }


  output : 
  {
    "early life" : "you where born and attend XYZ school where you procastinated on a project, I was raised agnostic", 
    "teenage years" : "I had a couple relationships at in high school. I was quite social" , 
    "getting to know myself" : "I began to develop hobbies such as reading, hiking and playing 
  }
  
  `
module.exports = context1, context2, context3, context4, context5, context6;  