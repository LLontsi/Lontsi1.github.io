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

    Email.send({
        Host: "smtp.gmail.com",
        Username: "lontsilambou",
        Password: "Lo12n@tsi",
        To: "lontsilambou@gmail.com",
        From: email,
        Subject: "Nouveau message du formulaire",
        Body: "E-mail: " + email + "<br>Message: " + message
    }).then(
        function (message) {
            setresText("Message Sent!");
            formreset();
        }
    ).catch(
        function (error) {
            setresText("Something went wrong!");
        }
    );
}

function formreset() {
    setresText("");
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
}
