
// Array of Multiple Objects

let quizDB = [
    {
        question: "Q1:- RAM Stands For ?",
        a: "Read Access Memory",
        b: "Random Access Memory",
        c: "Read Only Memory",
        d: "None",
        ans: "ans2"
    },
    {
        question: "Q2:- What is the full form of CSS ?",
        a: "Civil Services",
        b: "Cascading Style Service",
        c: "Cascading Style Super",
        d: "Cascading Style Sheet",
        ans: "ans4"
    },
    {
        question: "Q3:- What is the full form of HTTP ?",
        a: "Hypter Text Protocol",
        b: "Hyper Text Transfer Print",
        c: "Hyper Text Transfer Protocol",
        d: "None",
        ans: "ans3"
    },
]

// To access Html element in JS 
const questin = document.getElementById("que");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.querySelector(".btn");
const answers = document.querySelectorAll(".answer");
const showscr = document.getElementById("showscr");

let questionCount = 0;
let score = 0;

// load question in html
const loadQuestion = () => {
    const questionlist = quizDB[questionCount];
    questin.innerText = questionlist.question;
    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}

loadQuestion();
// Checked answers and get checked element Id
const getchecketanswer = () => {

    let correct_answerr;

    answers.forEach((curAnsEle) => {
        if (curAnsEle.checked) {
            correct_answerr = curAnsEle.id;
        }
    });
    return correct_answerr;
}

// unchecked all options
const deselectall = () => {
    answers.forEach((curAnsEle) => {
        curAnsEle.checked = false;
    });
}


// when click on submit button compare answer 
submit.addEventListener('click', () => {
    const checkedanswer = getchecketanswer();
    if (checkedanswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectall();

    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showscr.innerHTML = `
       <h3>Your Scored: ${score}/${quizDB.length}</h3>
       <a href="index.html"><button class= "btnnn">Play Again</button></a>
       `;
        showscr.classList.remove('showsc');
        submit.classList.add('dnone');
    }
}
);

