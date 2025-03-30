let clickCount = 0;

function changeBackground() {
    if (clickCount%2 == 0) {
        document.body.style.backgroundColor = "rgb(126, 68, 96)";
        if (document.title === 'Portfolio') {
            document.getElementById("welcome").style.color = "white";
        }
        else if(document.title === 'About Me') {
            document.getElementById("aboutText").style.color = "white";
        }
        else if(document.title === 'Education') {
            document.getElementById("educationPage").style.color = "white";
        }
        else if(document.title === 'Contact Me') {
            document.getElementById("contact").style.color = "white";
        }
        document.getElementById("changeColorBtn").innerText = "Background changed!"; 
    }
    else {
        document.body.style.backgroundColor = "white";
        if (document.title === 'Portfolio') {
            document.getElementById("welcome").style.color = "black";
        }
        else if(document.title === 'About Me') {
            document.getElementById("aboutText").style.color = "black";
        }
        else if(document.title === 'Education') {
            document.getElementById("educationPage").style.color = "black";
        }
        else if(document.title === 'Contact Me') {
            document.getElementById("contact").style.color = "black";
        }
        document.getElementById("changeColorBtn").innerText = "Change background"; 
    }
    clickCount++;
} 

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