const events = getEvents();
const questions = getQuestions();
const button = document.getElementById('suggest-block');
const firstText = document.getElementById('suggest-first-text');
const inner = document.getElementById('suggest-block-inner');
const closeButton = document.getElementById('suggest-block-close');
const questionBlock = document.getElementById('suggest-question-block');
const eventBlock = document.getElementById('suggest-event-block');
const questionArea = document.getElementById('suggest-question');
const answersArea = document.getElementById('suggest-answers');
const moveBackButton = document.getElementById('suggest-move-back');
const suggestEventArea = document.getElementById('suggest-event');
let questionStep = 1;
let previousQuestion = 'q1';
let history = {
    'q1': 'q1',
    'q2': undefined,
    'q3': undefined,
    'q4': undefined,
}

console.log(questions);

function openSuggest(){
  button.dataset.open = 'true';
  firstText.style.display = 'none';
  inner.style.display = 'block';

  showQuestion(questionStep);
}

function closeSuggest(){
    button.dataset.open = 'false';
    firstText.style.display = 'block';
    inner.style.display = 'none';
}

function showQuestion(step){
    let questionNum = 'q' + step;
    history[questionNum] = previousQuestion;
    let questionAnswer = questions[questionNum][previousQuestion];
    questionArea.innerHTML = questionAnswer['question'];
    answersArea.textContent = null; //answerを一度削除
    
    questionAnswer['answer'].forEach(function(answer){
        var answerBlock = document.createElement('li');
        answerBlock.innerHTML = answer['option'];
        answerBlock.classList.add('suggest-answer');
        if(answer['next']){
            answerBlock.setAttribute('onclick', "event.stopPropagation(); moveNext(" + "'" + answer['next'] + "')");
        }else if(answer['suggest'] !== null){
            answerBlock.setAttribute('onclick', "event.stopPropagation(); moveNext('last', '" + answer['suggest'] + "')" );
        }
        answersArea.appendChild(answerBlock);
    });
}

function showMoveBack(step){
    if(step < 1){
        hideMoveBack()
        return
    }
    moveBackButton.dataset.visibility = 'true';
    let previous = history['q' + step];
    moveBackButton.setAttribute('onclick', "event.stopPropagation(); moveBack('" + step + "', '" + previous + "')");
}

function hideMoveBack(){
    moveBackButton.dataset.visibility = 'false';
}

function moveNext(next, eventId){
    showMoveBack(questionStep);
    if(next === 'last'){
        showSeggestion(eventId);
        return
    }else{
        questionStep++;
        previousQuestion = next;
        showQuestion(questionStep);
    }
}

function moveBack(step, pre){
    if(step === '1'){
        hideMoveBack();
    }
    questionStep = step;
    previousQuestion = pre;
    showQuestion(questionStep);
    showMoveBack(step - 1);
    hideSuggestion();
}

function showSeggestion(eventId){
    eventBlock.dataset.visibility = true;
    questionBlock.dataset.visibility = false;
    suggestEventArea.innerHTML = events[Number(eventId)]
}

function hideSuggestion(){
    eventBlock.dataset.visibility = false;
    questionBlock.dataset.visibility = true;
}