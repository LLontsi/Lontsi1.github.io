var form = document.getElementById("formid");

function setresText(res) {
    document.getElementById("checker").innerText = res;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    setresText("Sending msg..");
    sendMessage();
});

function isValid(email) {
    // Vérifiez si l'e-mail est bien formaté
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}

function sendMessage() {
    var email = document.getElementById("Email").value;
    var message = document.getElementById("Message").value;
    
    if (email == "" || message == "") {
        setresText("Email or Message Empty!");
        return;
    }
    
    if (!isValid(email)) {
        setresText("Wrong Email");
        return;
    }

    var subject = "Nouveau message du formulaire";
    var body = "E-mail: " + email + "\n" +
               "Message: " + message;

    // Utilisez une requête AJAX pour envoyer l'e-mail
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://lontsilambou@gmail.com", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 200) {
            setresText("Message Sent!");
            formreset();
        } else {
            setresText("Something went wrong!");
        }
    };

    xhr.onerror = function () {
        setresText("Something went wrong!");
    };

    var data = JSON.stringify({
        email: email,
        subject: subject,
        body: body
    });

    xhr.send(data);
}

function formreset() {
    setresText("");
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
}
