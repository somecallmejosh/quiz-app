function resetQuestion(){$(".quiz-options label").remove(),$(".quiz-question").removeClass("answer-incorrect answer-correct"),$(".quiz-options").removeClass("option-selected"),$(".next-question, .submit").addClass("disabled")}function addselectedClass(){var e=$(this);e.closest(".quiz-options").find("label").removeClass("selected"),e.addClass("selected"),$(".quiz-action .submit").removeClass("disabled")}function updateAudio(e){var t=$(".audio-player");$(".audio-source").attr("src",e),t[0].pause(),t[0].load()}function quizStart(){quizItemCount=quizItems.length,currentQuestion=1,currentIndex=currentQuestion-1,correctAnswerCount=0,showPercentCorrect=Math.round(correctAnswerCount/quizItemCount*100),showSingleQuestion(),captureSelction(),showStatus(),$(".quiz-content").fadeIn(1e3),$(".quiz-instructions").fadeOut(300),$(".submit").on("click",submitResponse),$(".submit").on("click",function(){$(this).addClass("disabled"),$(".quiz-options").addClass("option-selected"),$(".next-question").removeClass("disabled")})}function showNextQuestion(){resetQuestion(),currentIndex++,currentQuestion++,showSingleQuestion(),captureSelction(),showStatus()}function userSelection(){return selectionID=parseInt($(this).attr("for")-1),console.log("user selection: "+selectionID),selectionID}function captureSelction(){$(".quiz-options label").on("click",userSelection),$(".quiz-options label").on("click",addselectedClass)}function submitResponse(){var e=quizItems[currentIndex].correctAnswer,t=selectionID,n=$(".quiz-question");e===t?n.addClass("answer-correct"):n.addClass("answer-incorrect")}function resetGame(){window.location.reload()}function showStatus(){$(".question-index").html(currentQuestion),$(".percent-correct").html(showPercentCorrect),$(".correct-total").html(correctAnswerCount),$(".question-total").html(quizItemCount)}var quizItems=[{mp3Name:"audio/bh.mp3",answerOptions:["Brick House","Give Up The Funk","Pick Up The Pieces","Funky Drummer"],correctAnswer:0},{mp3Name:"audio/fw.mp3",answerOptions:["Slip Sliding Away","What I Am","Fifty Ways to Leave Your Lover","Chuck E's In Love"],correctAnswer:2},{mp3Name:"audio/hft.mp3",answerOptions:["Rock and Roll","Hot For Teacher","I Can't Drive 55","You Might Think"],correctAnswer:1},{mp3Name:"audio/r.mp3",answerOptions:["Layla","In Your Eyes","Roseanna","Maybe I'm Amazed"],correctAnswer:2},{mp3Name:"audio/rr.mp3",answerOptions:["Tom Sawyer","Moby Dick","The End","Rock and Roll"],correctAnswer:3},{mp3Name:"audio/rwy.mp3",answerOptions:["I Feel Good","Rock With You","Billie Jean","Uptown Funk"],correctAnswer:1},{mp3Name:"audio/s.mp3",answerOptions:["Superstision","Get Down Tonight","Disco Inferno","Cissy Strut"],correctAnswer:0},{mp3Name:"audio/sbs.mp3",answerOptions:["War","Sunday Bloody Sunday","Fortunate Son","Rainy Day Woman #12 & 35"],correctAnswer:1},{mp3Name:"audio/sss.mp3",answerOptions:["In The Mood","Caravan","Night in Tunisia","Sing Sing Sing"],correctAnswer:3},{mp3Name:"audio/tp.mp3",answerOptions:["Semi Charmed Life","Right Here Right Now","Two Princes","Inside Out"],correctAnswer:2},{mp3Name:"audio/wo.mp3",answerOptions:["I Want Candy","Hand Jive","Wipeout","Let There Be Drums"],correctAnswer:2}],quizItemCount,currentQuestion,currentIndex,correctAnswerCount,showPercentCorrect;$(".quiz-content").hide(),$(".quiz-start").on("click",quizStart),$(".next-question").on("click",showNextQuestion);var showSingleQuestion=function(){return resetQuestion(),function(){var e=quizItems[currentIndex],t=e.answerOptions;updateAudio(quizItems[currentIndex].mp3Name);for(var n=0;n<t.length;n++)$("<label for="+(n+1)+">"+t[n]+"</label>").appendTo(".quiz-options")}}();