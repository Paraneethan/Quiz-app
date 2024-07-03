const questions = [
    {
        category: "JavaScript",
        question: "What is the use of the 'let' keyword in JavaScript?",
        options: ["Declare variables", "Create constants", "Define functions", "Define classes"],
        correctAnswer: "Declare variables"
    },
    {
        category: "JavaScript",
        question: "Which method is used to parse a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.parseObject()"],
        correctAnswer: "JSON.parse()"
    },
    {
        category: "JavaScript",
        question: "What is the output of 'typeof null' in JavaScript?",
        options: ["'object'", "'null'", "'undefined'", "'number'"],
        correctAnswer: "'object'"
    },
    {
        category: "JavaScript",
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        correctAnswer: "Character"
    },
    {
        category: "JavaScript",
        question: "Which method adds one or more elements to the end of an array and returns the new length?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()"
    },
    {
        category: "JavaScript",
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        options: ["<script src='app.js'>", "<script name='app.js'>", "<script href='app.js'>", "<script file='app.js'>"],
        correctAnswer: "<script src='app.js'>"
    },
    {
        category: "JavaScript",
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
        correctAnswer: "Netscape"
    },
    {
        category: "JavaScript",
        question: "Which of the following is used to define a class in JavaScript?",
        options: ["class", "def", "function", "object"],
        correctAnswer: "class"
    },
    {
        category: "JavaScript",
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "def myFunction()", "create myFunction()", "function:myFunction()"],
        correctAnswer: "function myFunction()"
    },
    {
        category: "JavaScript",
        question: "How do you write an array in JavaScript?",
        options: ["var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = {'red', 'green', 'blue'}"],
        correctAnswer: "var colors = ['red', 'green', 'blue']"
    },
    {
        category: "HTML",
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "HyperTool Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<footer>", "<section>", "<bottom>", "<aside>"],
        correctAnswer: "<footer>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define important text?",
        options: ["<strong>", "<important>", "<b>", "<i>"],
        correctAnswer: "<strong>"
    },
    {
        category: "HTML",
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["alt", "title", "src", "href"],
        correctAnswer: "alt"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define a navigation link?",
        options: ["<nav>", "<navigate>", "<navigation>", "<navlink>"],
        correctAnswer: "<nav>"
    },
    {
        category: "HTML",
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<linebreak>"],
        correctAnswer: "<br>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to specify a header for a document or section?",
        options: ["<header>", "<section>", "<top>", "<head>"],
        correctAnswer: "<header>"
    },
    {
        category: "HTML",
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "styles", "font"],
        correctAnswer: "style"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define a table?",
        options: ["<table>", "<tab>", "<tr>", "<td>"],
        correctAnswer: "<table>"
    },
    {
        category: "HTML",
        question: "Which HTML element is used to define emphasized text?",
        options: ["<em>", "<italic>", "<i>", "<strong>"],
        correctAnswer: "<em>"
    },
    {
        category: "CSS",
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        category: "CSS",
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "font"],
        correctAnswer: "style"
    },
    {
        category: "CSS",
        question: "Which is the correct CSS syntax?",
        options: ["body {color: black;}", "{body;color:black;}", "{body:color=black;}", "body:color=black;"],
        correctAnswer: "body {color: black;}"
    },
    {
        category: "CSS",
        question: "Which property is used to change the background color?",
        options: ["background-color", "color", "bgcolor", "background"],
        correctAnswer: "background-color"
    },
    {
        category: "CSS",
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-style", "text-size", "font-style"],
        correctAnswer: "font-size"
    },
    {
        category: "CSS",
        question: "What is the correct CSS syntax to make all the <p> elements bold?",
        options: ["p {font-weight: bold;}", "p {text-size: bold;}", "p {font-style: bold;}", "p {text-weight: bold;}"],
        correctAnswer: "p {font-weight: bold;}"
    },
    {
        category: "CSS",
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-transform: capitalize;", "text-style: capitalize;", "transform: capitalize;", "text-capitalize: true;"],
        correctAnswer: "text-transform: capitalize;"
    },
    {
        category: "CSS",
        question: "Which property is used to change the font of an element?",
        options: ["font-family", "font-style", "font-size", "font-weight"],
        correctAnswer: "font-family"
    },
    {
        category: "CSS",
        question: "Which property is used to center text?",
        options: ["text-align", "align-text", "center-text", "text-center"],
        correctAnswer: "text-align"
    },
    {
        category: "CSS",
        question: "How do you select an element with id 'demo'?",
        options: ["#demo", ".demo", "demo", "*demo"],
        correctAnswer: "#demo"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const questionArray = [
        { question: "What is the output of 'typeof null' in JavaScript?", options: ["object", "null", "undefined", "number"], answer: "object", category: "JavaScript" },
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"], answer: "Hyper Text Markup Language", category: "HTML" },
        { question: "What is the correct syntax for referring to an external style sheet in CSS?", options: ["<stylesheet>mystyle.css</stylesheet>", "<style src=\"mystyle.css\">", "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">", "<css>mystyle.css</css>"], answer: "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">", category: "CSS" }
        // Add more questions as needed
    ];

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let timerInterval;
    const timeLimit = 10; // seconds
    let timeRemaining = timeLimit;

    const timerElement = document.getElementById('timer');
    const questionTitleElement = document.getElementById('questionTitle');
    const optionsListElement = document.getElementById('optionsList');
    const resultCardElement = document.getElementById('resultCard');
    const submitButton = document.getElementById('submit-answer');
    const restartButton = document.getElementById('restart-quiz');
    const cancelButton = document.getElementById('cancel-quiz');
    const htmlFilterButton = document.getElementById('html-filter');
    const cssFilterButton = document.getElementById('css-filter');
    const jsFilterButton = document.getElementById('js-filter');

    function startTimer() {
        timerElement.textContent = `00:${timeRemaining < 10 ? '0' : ''}${timeRemaining}`;
        timerInterval = setInterval(() => {
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                submitAnswer();
            } else {
                timeRemaining--;
                timerElement.textContent = `00:${timeRemaining < 10 ? '0' : ''}${timeRemaining}`;
            }
        }, 1000);
    }

    function displayQuestion() {
        const currentQuestion = questionArray[currentQuestionIndex];
        questionTitleElement.textContent = currentQuestion.question;
        optionsListElement.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const li = document.createElement('li');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = `option${index}`;
            radio.name = 'answer';
            radio.value = option;
            const label = document.createElement('label');
            label.htmlFor = `option${index}`;
            label.textContent = option;
            li.appendChild(radio);
            li.appendChild(label);
            optionsListElement.appendChild(li);
        });
        timeRemaining = timeLimit;
        clearInterval(timerInterval);
        startTimer();
    }

    function submitAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption && selectedOption.value === questionArray[currentQuestionIndex].answer) {
            correctAnswers++;
            alert('Correct!');
        } else {
            alert('Wrong!');
        }
        if (currentQuestionIndex < questionArray.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            displayResult();
        }
    }

    function displayResult() {
        clearInterval(timerInterval);
        resultCardElement.textContent = `You answered ${correctAnswers} out of ${questionArray.length} questions correctly.`;
        resultCardElement.style.display = 'block';
    }

    function cancelQuiz() {
        clearInterval(timerInterval);
        resultCardElement.textContent = 'Quiz cancelled.';
        resultCardElement.style.display = 'block';
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        resultCardElement.style.display = 'none';
        displayQuestion();
    }

    function filterQuestions(category) {
        questionArray = questionArray.filter(question => question.category === category);
        restartQuiz();
    }

    submitButton.addEventListener('click', submitAnswer);
    restartButton.addEventListener('click', restartQuiz);
    cancelButton.addEventListener('click', cancelQuiz);
    htmlFilterButton.addEventListener('click', () => filterQuestions('HTML'));
    cssFilterButton.addEventListener('click', () => filterQuestions('CSS'));
    jsFilterButton.addEventListener('click', () => filterQuestions('JavaScript'));

    displayQuestion();
});
