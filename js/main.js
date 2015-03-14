
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
	totaldiv = $('.textBar');
    var number = "";
    var newnumber = "";
    var operator = "";
    totaldiv.text("0");
    
    $(".button").not('.C, .AC').click(function(){
        number += $(this).text();
        totaldiv.text(number);
    });
    $('.operator').click(function(){
       if(operator.length > 0){
           operator = $(this).html();
       }else{
        newnumber = totaldiv.text();
        number= "";
        totaldiv.text('0');
        operator = $(this).html();
       }
        
    });
    $('.C, .AC').click(function(){
          var whichClass = $(this).attr('class');
        number = "";
        totaldiv.text('0')
        if(whichClass == "AC"){
            newnumber = "";   
        }
    });
});