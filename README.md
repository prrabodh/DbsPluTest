- Please refer to .txt files to manually check for the dumps
- .json file dumps are for **giveTestWithAnswers.js**  file.
- To give tests against sample Ids, use **giveTestWithAnswers.js**   but **NOTE** it will select 1st answers only for the first attempt. So use this to get QnA only
- To fetch the QnA of given test use **getBase64Answers.js** after clicking on **view answer** . After the test QnA will be printed in console. Run the command **btoa(JSON.stringify(allQuestionsAndAnswers))** in the
console to get the QnA in base64 encoded JSON. _This JSON can later be clubbed with mutiple dumps and the master one needs to converted back to base64 encoded string and can be used as an input_ to **giveTestWithAnswers.js** script and it will give the test automatically by finding the answer in the provided dump
