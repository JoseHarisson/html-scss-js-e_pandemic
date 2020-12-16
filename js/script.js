const questionItems=document.querySelectorAll(".q-item"),
      totalQuestionItems = questionItems.length; 
      for(let i=0; i<totalQuestionItems;i++){ 
          //console.log(questionItems[i]);
        questionItems[i].addEventListener("click",function(){
           /* for(let j=0; j<totalNavList;j++){
                navList[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active");*/ 
            console.log((questionItems[i].children[1]).getAttribute("id"));   
        })
    }