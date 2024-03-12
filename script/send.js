var form = document.getElementById("formid");

function setresText(res) {
    document.getElementById("checker").innerText = res;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    setresText("Sending msg..");
    var msg = sendMessage();
});

function isValid(email) {
    //check email is formated
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}
function sendMessage() {
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Message").value;
    if (email == "" || message == "") {
        setresText("Email or Message Empty!");
        return false;
    }
    if (!isValid(email)) {
        setresText("Wrong Email");
        return false;
    }

    var data = new FormData();
    data.set('Name','@PORTFOLLIO')
    data.set('Email', email);
    data.set('Request', message);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/u/0/home/projects/11cD8WPSwkWehzVdhpCy7k94pHJWVMsJBUE3RaYrClFRTBt8KzaxO6V9b/edit', true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
        setresText("Message Sended !");
        setTimeout(function () {
         formreset();
     }, 2000);
    }
    }
    xhr.onerror = function(){
        setresText("Somthing Error !");
    }
    xhr.send(data);

    return true;
}

function formreset() {
    //for empty all values
    setresText("");
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
}

