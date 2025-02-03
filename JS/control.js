// Add an event listener to the checkbox
var valve1 = document.getElementById('switch1');
valve1.addEventListener("change", van1);
function van1()
{
    if (valve1.checked) {
        v1='1';
    } else {
        v1='0';
    }
    msg_control = 'Button,' + v1 + ',' + v2 + ',' + v3 + ',' + v4 + ',' + v5 + ',' + v6 ;
    publishToMQTT(msg_control);
}


var valve2 = document.getElementById('switch2');
valve2.addEventListener("change", van2);
function van2()
{
    if (valve2.checked) {
        v2='1';
    } else {
        v2='0';
    }
    msg_control = 'Button,' + v1 + ',' + v2 + ',' + v3 + ',' + v4 + ',' + v5 + ',' + v6 ;
    publishToMQTT(msg_control);
}

var valve3 = document.getElementById('switch3');
valve3.addEventListener("change", van3);
function van3()
{
    if (valve3.checked) {
        v3='1';
    } else {
        v3='0';
    }
    msg_control = 'Button,' + v1 + ',' + v2 + ',' + v3 + ',' + v4 + ',' + v5 + ',' + v6 ;
    publishToMQTT(msg_control);
}


var valve4 = document.getElementById('switch4');
valve4.addEventListener("change", van4);
function van4()
{
    if (valve4.checked) {
        v4='1';
    } else {
        v4='0';
    }
    msg_control = 'Button,' + v1 + ',' + v2 + ',' + v3 + ',' + v4 + ',' + v5 + ',' + v6 ;
    publishToMQTT(msg_control);
}

var valve5 = document.getElementById('switch5');
valve5.addEventListener("change", van5);
function van5()
{
    if (valve5.checked) {
        v5='1';
    } else {
        v5='0';
    }
    msg_control = 'Button,' + v1 + ',' + v2 + ',' + v3 + ',' + v4 + ',' + v5 + ',' + v6 ;
    publishToMQTT(msg_control);
}


var valve6 = document.getElementById('switch6');
valve6.addEventListener("change", van6);
function van6()
{
    if (valve6.checked) {
        v6='1';
    } else {
        v6='0';
    }
    msg_control = 'Button,' + v1 + ',' + v2 + ',' + v3 + ',' + v4 + ',' + v5 + ',' + v6 ;
    publishToMQTT(msg_control);
}

