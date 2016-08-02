//******************** www.shewt.co.tz *******************//

function speed(msgLength,beltLength){
    var K=30000/1763; //constant K controls the speed of marquee, its units is time (ms)/pixel.
    if(msgLength>=beltLength){
        return msgLength*K;
    }else{
        return (msgLength+beltLength)*K;
    }
}

//call this fuction and provide it with the 
//message   =the text/html to be displayed
//msgObjId  =id of the message object (eg. div, span) cariying the text 
//beltId    =the id of the patent object that is the background /parent of the message object

function marquee(message,msgObjId, beltId){ 
    $("#"+msgObjId).empty();
    $("#"+msgObjId).html(message);
    var ele1= document.getElementById(msgObjId);
    var ele2= document.getElementById(beltId);
    var length1=ele1.offsetWidth;
    var length2=ele2.offsetWidth;
    $("#"+msgObjId).css("left",length2+"px");
    $("#"+msgObjId).animate({left: ['-'+length1+'px','linear']},speed(length1,length2),function(){});		
}