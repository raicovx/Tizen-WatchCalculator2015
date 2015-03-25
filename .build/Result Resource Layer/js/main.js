
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back"){
            tizen.application.getCurrentApplication().exit();
        }
    });
	var totaldiv = $('.textBar'),
	 number = "",
     newnumber = "",
     operator = "",
     operatorSet = false,
     calculation = "";
    totaldiv.text("0");
    
    $(".button").not('.C, .AC').click(function(){
        number += $(this).text();
        totaldiv.text(number.toString());
    });
    $('.operator').not('.equals').click(function(){
        if(!operatorSet){
        newnumber = totaldiv.text();
        number= "";
        totaldiv.text("0");
        operator = $(this).html();
        operatorSet = true;
        }
       if(operatorSet){
           operator = $(this).text();
       }
    });
    $('.C, .AC').click(function(){
          var whichClass = $(this).attr('class');
        number = "";
        totaldiv.text('0');
        if(whichClass === "AC"){
            newnumber = ""; 
            calculation = "";
            operator = "";
            operatorSet = false;
        }
    });
    $('.equals').click(function(){
            if(operator == '+'){
                 calculation = (parseFloat(newnumber,10))+(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
           }
            if(operator == "-"){
                 calculation = (parseFloat(newnumber,10))-(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
            }
            if(operator == "×"){
                 calculation = (parseFloat(newnumber,10))*(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
           }
            if(operator == "÷"){
                 calculation = (parseFloat(newnumber,10))/(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
           }
            
    });
    
});