function removeMsg(id) {
    document.getElementById(id).remove();
}

function changeTemp(e, className) {
    var temp = document.getElementsByClassName(className);
    
    for (var i=0; i< temp.length; i++) {
        if(e.value=="c") {
           temp[i].innerText = Math.round((parseInt(temp[i].innerText) - 32) * 5 / 9) + "°";
        }
        else {
            temp[i].innerText = Math.round(parseInt(temp[i].innerText) * 9 / 5 + 32) + "°";
        }
    }
}