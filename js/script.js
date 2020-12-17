const questionItems=document.querySelectorAll(".q-item"),
      totalQuestionItems = questionItems.length, 
      answerItems=document.querySelectorAll(".q-answer"),
      totalAnswerItems = answerItems.length; 
      for(let i=0; i<totalQuestionItems;i++){ 
          //console.log(questionItems[i]); 
            console.log(questionItems[i]); 
            questionItems[i].addEventListener("click",function(){  
                if(answerItems[i].classList.contains("visible")){ 
                    for(let i=0; i<totalAnswerItems;i++){
                    if(answerItems[i].classList.contains("visible")){ 
                        answerItems[i].classList.remove("visible");
                    }
                }
                }
                else{ 
                    for(let i=0; i<totalAnswerItems;i++){
                        if(answerItems[i].classList.contains("visible")){ 
                            answerItems[i].classList.remove("visible");
                        }
                    }
                    answerItems[i].classList.add("visible");  
                }
                 
            }) 
        } 