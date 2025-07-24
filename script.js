let quiz = [
    {
        questions : "What does HTML stands for?",
        choices : ["A)Hyper Text Markup Language",
            "B)Home Tool Markup Language",
            "c)Hyperlinks and Text Markup Language",
            "D)High Text Medicine Language"
        ],
        answer : "A)Hyper Text Markup Language"
    },
    {
        questions : "which property is used to change background color?",
        choices : ["A)color","B)bgcolor","C)background-color","D)bckground-style"],
        answer : "C)background-color"
    },
    {
        questions : "Which keyword is used to declare a variable in Java Script?",
        choices : ["A)var","B)let","C)const","D)All of the above"],
        answer : "D)All of the above"
    }
]
index = 0;
score = 0;
function askQuestion(){
    let nextButton = document.getElementById("nextButton");
    if(index >= quiz.length){
        nextButton.textContent = "View Result";
        nextButton.onclick=()=>{
            showResult();
        }
        return;
    }
    let container = document.getElementById("container");
    container.style.display = "block";
    let quizBox = document.getElementById("quizBox");
    quizBox.style.display = "block";
    let question = document.getElementById("question");
    let option = document.querySelectorAll(".option");
    let quizQuestion = quiz[index];
    question.textContent = quizQuestion.questions;
    option.forEach((btn,i)=>{
        btn.disabled = false;
        btn.textContent = quizQuestion.choices[i];
        btn.style.color = "black";
        btn.onclick=()=>{
            option.forEach(button=>button.disabled = true);
            btn.style.color = "blue";
            if (btn.textContent === quizQuestion.answer){
                score++; 
            }
    }  } )
}
if (index<quiz.length-1){
    nextButton.onclick=()=>{
        index++;
        askQuestion();
    }
}         

function showResult(){
    let quizResult = document.getElementById("quizResult");
    quizBox.style.display = "none";
    quizResult.style.display = "block";
    quizResult.textContent = "Your total score is "+score+"/3";















}
        
