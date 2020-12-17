//*** DISPLAY ANSWER OF QUESTION ****/

const questionItems=document.querySelectorAll(".q-item"),
      totalQuestionItems = questionItems.length, 
      answerItems=document.querySelectorAll(".q-answer"),
      totalAnswerItems = answerItems.length; 

      function RemoveVisibility(){
        for(let i=0; i<totalAnswerItems;i++){
            if(answerItems[i].classList.contains("visible")){ 
                answerItems[i].classList.remove("visible");
            }
        }
      }
      
      for(let i=0; i<totalQuestionItems;i++){ 
            questionItems[i].addEventListener("click",function(){  
                if(answerItems[i].classList.contains("visible")){  
                    RemoveVisibility(); 
                }
                else{ 
                    RemoveVisibility();
                    answerItems[i].classList.add("visible");  
                }
                 
            }) 
        } 
         


        //***** GET DATA FROM JSON ****/
var myData = JSON.parse(data);  
var mainContainer = document.getElementById("myData"); 
for( let i=0; i<myData.length;i++){
    var ul = document.createElement("ul") ;
    ul.className='container-item';
    ul.classList.add('data');
    for(let j=0; j<4;j++){
        var li = document.createElement("li");
        li.className='item';
        if (j ==0) {li.innerHTML = myData[i].country; }
        if (j ==1) {li.innerHTML = myData[i].cases; }
        if (j ==2) {li.innerHTML = myData[i].death; }
        if (j ==3) {li.innerHTML = myData[i].recovered; }
        ul.appendChild(li)
    }  
    mainContainer.appendChild(ul);
} 