
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
});