let clickCount = 0;

function changeBackground() {
    if (clickCount%2 == 0) {
        document.body.style.backgroundColor = "rgb(126, 68, 96)";
        document.getElementById("aboutText").style.color = "white";
        document.getElementById("hobbiesText").style.color = "white";
        document.getElementById("contactText").style.color = "white";
        document.getElementById("changeColorBtn").innerText = "Background changed!"; 
    }
    else {
        document.body.style.backgroundColor = "white";
        document.getElementById("aboutText").style.color = "black";
        document.getElementById("hobbiesText").style.color = "black";
        document.getElementById("contactText").style.color = "black";
        document.getElementById("changeColorBtn").innerText = "Change background"; 
    }
    clickCount++;
} 