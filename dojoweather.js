function loc(element) {
    alert("Loading weather report...");
}
var box = document.querySelector("#cookie");
function disappear() {
    box.remove();
}
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var num3 = document.querySelector("#num3");
var num4 = document.querySelector("#num4");
var num5 = document.querySelector("#num5");
var num6 = document.querySelector("#num6");
var num7 = document.querySelector("#num7");
var num8 = document.querySelector("#num8");

//fahrenheit = celsius * 1.8 + 32
//T(°C) = (T(°F) - 32) / 1.8


function tempConversion(element) {
    if (element.value == "C") {
        num1.innerText = "24";
        num2.innerText = "18";
        num3.innerText = "27";
        num4.innerText = "19";
        num5.innerText = "21";
        num6.innerText = "16";
        num7.innerText = "26";
        num8.innerText = "21";
        
    }
    else if (element.value == "F") {
        num1.innerText = "75";
        num2.innerText = "65";
        num3.innerText = "80";
        num4.innerText = "66";
        num5.innerText = "69";
        num6.innerText = "61";
        num7.innerText = "78";
        num8.innerText = "70";
    }

}