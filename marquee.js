//********************GLOBAL VARIABLES*******************//
var ele1;
var ele2;
var length1;
var length2;

// 07 speed of marquee
function speed(msgLength,beltLength){
    var K=30000/1763; //constant K controls the speed of marquee, its units is time (ms)/pixel.
    if(msgLength>=beltLength){
        return msgLength*K;
    }else{
        return (msgLength+beltLength)*K;
    }
}

function tangazo(message,messageLabel,msgObjId,labelObjId){
    $("#"+msgObjId).empty();
    $("#"+msgObjId).html(message);
    $("#"+labelObjId).text(messageLabel);
    ele1= document.getElementById(msgObjId);
    ele2= document.getElementById(labelObjId);
    length1=ele1.offsetWidth;
    length2=ele2.offsetWidth;
    $("#"+msgObjId).css("left",length2+"px");
    $("#"+msgObjId).animate({left: ['-'+length1+'px','linear']},speed(length1,length2),function(){
        scrol();
    });		
}