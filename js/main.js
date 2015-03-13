
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
	totaldiv = $('.textBar');
	var testNumLength = function(number){
      if(number.length > 9){
          totaldiv.text(number.substr(number.length-9, 9));
      }
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    totaldiv.text("0");
    
    $(".button").not('.C, .AC').click(function(){
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });
});