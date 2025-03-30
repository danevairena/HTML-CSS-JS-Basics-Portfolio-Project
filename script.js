let clickCount = 0;

function changeBackground() {
    if (clickCount%2 == 0) {
        document.body.style.backgroundColor = "rgb(126, 68, 96)";
        document.getElementById("welcome").style.color = "white";
        /*cument.getElementById("aboutText").style.color = "white";
        document.getElementById("hobbiesText").style.color = "white";
        document.getElementById("contactText").style.color = "white";*/
        document.getElementById("changeColorBtn").innerText = "Background changed!"; 
    }
    else {
        document.body.style.backgroundColor = "white";
        document.getElementById("welcome").style.color = "black";
        /*cument.getElementById("aboutText").style.color = "black";
        document.getElementById("hobbiesText").style.color = "black";
        document.getElementById("contactText").style.color = "black";*/
        document.getElementById("changeColorBtn").innerText = "Change background"; 
    }
    clickCount++;
} 

/*function changeColorBtn() {
    document.get.style.backgroundColor="rgb(126, 68, 96)";
}*/

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function formValidate() {
    if(document.getElementById("name").value.length == 0) {
    alert("Name field is empty");
    }
    else {
        if(document.getElementById("email").value.match(mailformat)) {
            if(document.getElementById("message").value.length == 0){
                alert("No message included");
            }
            else alert("Form submitted.");
        }
        else alert("Incorrect email address");
    }
}