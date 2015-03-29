
$(window).load(function(){
	document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName === "back"){
            tizen.application.getCurrentApplication().exit();
        }
    });
    var docCookies = {
            getItem: function (sKey) {
            if (!sKey) { return null; }
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
          },
          setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
            var sExpires = "";
            if (vEnd) {
              switch (vEnd.constructor) {
                case Number:
                  sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                  break;
                case String:
                  sExpires = "; expires=" + vEnd;
                  break;
                case Date:
                  sExpires = "; expires=" + vEnd.toUTCString();
                  break;
              }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
          },
          removeItem: function (sKey, sPath, sDomain) {
            if (!this.hasItem(sKey)) { return false; }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
            return true;
          },
          hasItem: function (sKey) {
            if (!sKey) { return false; }
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
          },
          keys: function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
            return aKeys;
          }
    };
    var initialButtonCheck = function(){
        var origBttn = docCookies.getItem("origBttn"); 
          if(origBttn != 'null'){
                if(origBttn == 'false'){
                    $('.buttonRow#one, .buttonRow#three').remove();
                   $('.buttonRow#two').prepend('<div class="buttonRow" id="three"><div class="button 7 waves-effect waves-light btn grey darken-3">7</div><div class="button 8 waves-effect waves-light btn grey darken-3">8</div><div class="button 9 waves-effect waves-light btn grey darken-3">9</div></div>').append('<div class="buttonRow" id="one"><a class="button 1 waves-effect waves-light btn grey darken-3">1</a><a class="button 2 waves-effect waves-light btn grey darken-3">2</a><a class="button 3 waves-effect waves-light btn grey darken-3">3</a></div>');
              };         
        }else{
           origBttn = docCookies.setItem('origBttn', 'true', 31536e3);
        };
    };
    var buttonSwitcher = function(){ 
        $('.buttonRow#one, .buttonRow#three').remove();
        var origBttn = docCookies.getItem("origBttn"); 
        if(origBttn == 'true'){
                  $('.buttonRow#two').prepend('<div class="buttonRow" id="three"><div class="button 7 waves-effect waves-light btn grey darken-3">7</div><div class="button 8 waves-effect waves-light btn grey darken-3">8</div><div class="button 9 waves-effect waves-light btn grey darken-3">9</div></div>').append('<div class="buttonRow" id="one"><a class="button 1 waves-effect waves-light btn grey darken-3">1</a><a class="button 2 waves-effect waves-light btn grey darken-3">2</a><a class="button 3 waves-effect waves-light btn grey darken-3">3</a></div>');
             origBttn = docCookies.setItem('origBttn', 'false', 31536e3);
            
        }else if(origBttn == 'false'){
             $('.buttonRow#two').append('<div class="buttonRow" id="three"><div class="button 7 waves-effect waves-light btn grey darken-3">7</div><div class="button 8 waves-effect waves-light btn grey darken-3">8</div><div class="button 9 waves-effect waves-light btn grey darken-3">9</div></div>').prepend('<div class="buttonRow" id="one"><a class="button 1 waves-effect waves-light btn grey darken-3">1</a><a class="button 2 waves-effect waves-light btn grey darken-3">2</a><a class="button 3 waves-effect waves-light btn grey darken-3">3</a></div>');
             origBttn = docCookies.setItem('origBttn', 'true',31536e3);
        }else{
            initialButtonCheck();
            buttonSwitcher();
        }
    };
    
                                            
	var totaldiv = $('.textBar'),
	 number = "",
     newnumber = "",
     operator = "",
     operatorSet = false,
     calculation = "";

        initialButtonCheck(); 
       
    totaldiv.text("0");
    
    $(".button").not('.C, .AC').click(function(){
        number += $(this).text();
        totaldiv.text(number.toString());
    });
    $('.operator').not('.equals, .posNeg').click(function(){
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
    
    $('.posNeg').click(function(){
     number = -number;
        totaldiv.text(number.toString());
    });
   
   $('.RowSwitch').click(function(){
       buttonSwitcher();   
   });
});

