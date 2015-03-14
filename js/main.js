
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
	totaldiv = $('.textBar');
    var number = "";
    var newnumber = "";
    var operator = "";
    var operatorSet = false;
    var calculation = "";
    totaldiv.text("0");
    
    $(".button").not('.C, .AC').click(function(){
        number += $(this).text();
        totaldiv.text(number);
    });
    $('.operator').not('.equals').click(function(){
        if(!operatorSet){
        newnumber = totaldiv.text();
        number= "";
        totaldiv.text('0');
        operator = $(this).html();
        operatorSet = true;
        }
       if(operatorSet){
           operator = $(this).html();
       }
    });
    $('.C, .AC').click(function(){
          var whichClass = $(this).attr('class');
        number = "";
        totaldiv.text('0')
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
           }else if(operator == "-"){
                 calculation = (parseFloat(newnumber,10))-(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
            }else if(operator == "×"){
                 calculation = (parseFloat(newnumber,10))*(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
           }else if(operator == "÷"){
                 calculation = (parseFloat(newnumber,10))/(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
           };
            
    });
    
});