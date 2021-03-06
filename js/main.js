/*jslint browser: true*/
/*global $, jQuery, alert*/
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back"){
            tizen.application.getCurrentApplication().exit();
        }
    });
    var origBttn,
     radians,
     initialButtonCheck = function(){
        origBttn = localStorage.origBttn; 
                if(origBttn == 'false'){
                    $('.buttonRow#one, .buttonRow#three').remove();
                   $('.buttonRow#two').prepend('<div class="buttonRow" id="three"><div class="button 7 waves-effect waves-light btn grey darken-3">7</div><div class="button 8 waves-effect waves-light btn grey darken-3">8</div><div class="button 9 waves-effect waves-light btn grey darken-3">9</div></div>').append('<div class="buttonRow" id="one"><a class="button 1 waves-effect waves-light btn grey darken-3">1</a><a class="button 2 waves-effect waves-light btn grey darken-3">2</a><a class="button 3 waves-effect waves-light btn grey darken-3">3</a></div>');
              }        
        if(!origBttn){
           origBttn = localStorage.origBttn = 'true';
        }
    },
    buttonSwitcher = function(){ 
        origBttn = localStorage.origBttn; 
        if(origBttn == 'true'){
            $('.buttonRow#one, .buttonRow#three').remove();
                  $('.buttonRow#two').prepend('<div class="buttonRow" id="three"><div class="button 7 waves-effect waves-light btn grey darken-3">7</div><div class="button 8 waves-effect waves-light btn grey darken-3">8</div><div class="button 9 waves-effect waves-light btn grey darken-3">9</div></div>').append('<div class="buttonRow" id="one"><a class="button 1 waves-effect waves-light btn grey darken-3">1</a><a class="button 2 waves-effect waves-light btn grey darken-3">2</a><a class="button 3 waves-effect waves-light btn grey darken-3">3</a></div>');
              localStorage.origBttn = 'false';
            
        }else if(origBttn == 'false'){
            $('.buttonRow#one, .buttonRow#three').remove();
             $('.buttonRow#two').append('<div class="buttonRow" id="three"><div class="button 7 waves-effect waves-light btn grey darken-3">7</div><div class="button 8 waves-effect waves-light btn grey darken-3">8</div><div class="button 9 waves-effect waves-light btn grey darken-3">9</div></div>').prepend('<div class="buttonRow" id="one"><a class="button 1 waves-effect waves-light btn grey darken-3">1</a><a class="button 2 waves-effect waves-light btn grey darken-3">2</a><a class="button 3 waves-effect waves-light btn grey darken-3">3</a></div>');
             localStorage.origBttn = 'true';
        }else{
            alert('using else');
            initialButtonCheck();
        }
    },
    totaldiv = $('.textBar'),
	 number = "",
     newnumber = "",
     operator = "",
     operatorSet = false,
     calculation = "",
     sciOpResult;
        initialButtonCheck(); 
       
    totaldiv.text("0");
    
    $(".button").not('.C, .AC, .sqRoot, .Sine, .Cosine, .Tangent,.degRad').click(function(){
        number += $(this).text();
        totaldiv.text(number.toString());
    });
    $('.operator, .specialOperator').not('.equals, .posNeg').click(function(){
        if(!operatorSet){
        newnumber = totaldiv.text();
        number= "";
        totaldiv.text("0");
        operator = $(this).text();
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
          radians = false;
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
                    radians = false;
           }else if(operator == "-"){
                 calculation = (parseFloat(newnumber,10))-(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
                radians = false;
            }else if(operator == "×"){
                 calculation = (parseFloat(newnumber,10))*(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
                radians = false;
           }else if(operator == "÷"){
                 calculation = (parseFloat(newnumber,10))/(parseFloat(number,10));
                   totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
                radians = false;
           }else if(operator == "^"){
                calculation = Math.pow(parseFloat(newnumber,10), parseFloat(number,10));
                 totaldiv.text(calculation.toString()); 
                   operator = "";
                   operatorSet = false;
                radians = false;
            }
            
    });
    
    $('.posNeg').click(function(){
     number = -number;
        totaldiv.text(number.toString());   
    });
   $('.degRad').click(function(){
         if(radians){
              var visibleRad = parseFloat(sciOpResult, 10),
              degrees = visibleRad * (180/Math.PI);
             totaldiv.text(degrees);
             radians = false;
         }else if(!radians){
               var visibleNum = parseFloat(totaldiv.text(), 10),
              radianVal = visibleNum / (180/Math.PI);
             totaldiv.text(radianVal);
             radians = true;
         }
    });
   $('.RowSwitch').click(function(){
       buttonSwitcher();   
   });
     $('.sqRoot').click(function(){
       var visibleNum = parseFloat(totaldiv.text(), 10);
         visibleNum = Math.sqrt(visibleNum); 
         totaldiv.text(visibleNum);
          operator = "";
                   operatorSet = false;
   });
       $('.Sine').click(function(){
       var visibleNum = parseFloat(totaldiv.text(), 10);
         visibleNum = Math.sin(visibleNum);
           radians = true;
            sciOpResult = visibleNum;
         totaldiv.text(visibleNum);
            operator = "";
                   operatorSet = false;
   });
    $('.Cosine').click(function(){
       var visibleNum = parseFloat(totaldiv.text(), 10);
         visibleNum = Math.cos(visibleNum);
         sciOpResult = visibleNum;
         totaldiv.text(visibleNum);
            radians = true;
         operator = "";
                   operatorSet = false;
   });
    $('.Tangent').click(function(){
       var visibleNum = parseFloat(totaldiv.text(), 10);
         visibleNum = Math.tan(visibleNum);
         sciOpResult = visibleNum;
         totaldiv.text(visibleNum);
         radians = true;
         operator = "";
                   operatorSet = false;
   });
  
});

