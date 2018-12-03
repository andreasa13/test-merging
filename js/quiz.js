var qstNumb = 0;
var qstRemain = 5;
var correct = 0;
var rand = Math.floor((Math.random() * 4) + 0);
var questions = $(".question");
$('#'+questions[rand].id+'').show(250);

function btnNext(){ 
	$('#wrongLabel').hide();
	$('#correctLabel').hide();
	$('#btnNext').hide();
	$('#'+questions[rand].id+'').slideUp(250);
	questions.splice(rand,1);
	qstRemain = qstRemain -1;
	rand = Math.floor((Math.random() * (qstRemain-1)) + 0);
	$('#'+questions[rand].id+'').show(250);
}

$('input[type=radio]').change(function(){
	qstNumb = qstNumb + 1;
	var answer = this.className;
	var qst = this.name;
	var answerLabel = this.nextSibling;


	if(answer=="wrong"){
		$('#wrongLabel').show();
	}else{
		correct = correct + 1;
		$('#correctLabel').show();
	}

    if(qstNumb<5){
    	$('#btnNext').show();
    }else{
    	$('#correctAnswers').show();
    	document.getElementById('correctAnswers').innerHTML = 'You answered '+correct+'/5 correct!';
    }
	
	var radio=document.getElementsByName(qst);
    var len=radio.length;
    for(var i=0;i<len;i++)
    {
       radio[i].disabled=true;
    }
});
