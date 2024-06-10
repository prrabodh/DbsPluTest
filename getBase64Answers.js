
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

let allQuestionsAndAnswers = {}; // Object to store question-answer pairs (key: question, value: answer)
giveTest = true
while(giveTest) {

  question = document.getElementsByClassName("stemText")[0].innerText.replace(/\n/g, "").trim(); // Replace all newlines with empty string

  questionLog = document.getElementsByClassName("stemText")[0].innerText.replace("\n", "").replace("\n", "").replace("\n", "")

  answer = document.getElementsByClassName("questionChoices")[0].getElementsByClassName("key")[0];
  if (answer == undefined) {
    answer = document.getElementsByClassName("questionChoices")[0].getElementsByClassName("selectedKey")[0];
  }

//   answerParagraph = answer.getElementsByTagName("p")[0];
//   if (answerParagraph == undefined) {
//     answerParagraph = answer.getElementsByTagName("pre")[0];
//   }


//   answerFormatted = answerParagraph.innerText.trim();
//   answerFormattedJSON = answerParagraph.innerText.trim().replace(/\n/g, "").trim();

//   // Create a JSON object with question as key and answer as value
//   allQuestionsAndAnswers[question] = answerFormattedJSON; 

answerParagraph = answer.getElementsByTagName("div")[0].innerText.trim()

answerParagraph = answerParagraph.replace("Your choice: correct -","")

answerParagraph = answerParagraph.replace("correct -","")

answerParagraph = answerParagraph.replace("Correct -","")

answerFormatted = answerParagraph.trim();
answerFormattedJSON = answerParagraph.replace(/\n/g, "").trim();

// Create a JSON object with question as key and answer as value
  allQuestionsAndAnswers[question] = answerFormattedJSON;

  console.log(questionLog + "\n \n \t \t \t" + answerFormatted);

  nextQuestionBtn = document.getElementsByClassName("nextQuestion")[0];

  if (nextQuestionBtn == undefined){
      giveTest = false  
} else{
  nextQuestionBtn.click();
}
  
  await sleep(4000); // Sleep for 4 secs for the HTML to load
  if(!giveTest){
  console.log("base64Data"+btoa(JSON.stringify(allQuestionsAndAnswers)))
}
}
