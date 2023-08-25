function validateSubscribe() {
    let firstName = document.getElementById("firstname").value
    let lastName = document.getElementById("lastname").value
    let email = document.getElementById("email").value
    let phoneNumber = document.getElementById("phone").value
    let newsLetter = document.getElementById("newsletter").checked
    let cleanser = document.getElementById("cleanser").checked
    let essentialOil = document.getElementById("essentialoil").checked
    let faceMask = document.getElementById("facemask").checked
    let moisturizer = document.getElementById("moisturizer").checked
    let serum = document.getElementById("serum").checked
    
    var subscribed = false;
    var C = "";
    var EO = "";
    var FM = "";
    var M = "";
    var S = "";

    if (!firstName || !lastName || !email || !phoneNumber) {
        alert("All fields must be filled!")
    }
    else if (!(firstName >= 'A' && firstName <= 'Z') && !(firstName >= 'a' && firstName <= 'z')) {
        alert("First name must be alphabetical!")
    }
    else if (!(lastName >= 'A' && lastName <= 'Z') && !(lastName >= 'a' && lastName <= 'z')) {
        alert("Last name must be alphabetical!")
    }
    else if (!email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com")) {
        alert("Must use @gmail.com or @yahoo.com")
    }
    else if (isNaN(phoneNumber)) {
        alert("Phone number must be numeric!")
    }
    else if (phoneNumber.length > 15 || phoneNumber.length < 7) {
        alert("Phone number must be between 7 to 15 digits!")
    }
    else if (newsLetter == false) {
        alert("Must agree to receive newsletter from VOrskins!")
    }
    else {
        alert("Subscription successful!")
        subscribed = true;
    }

    if (subscribed == true && newsLetter == true) {
        if (cleanser == true) {
            C = "cleanser, ";
        }
        if (essentialOil == true) {
            EO = "essential oil, ";
        }
        if (faceMask == true) {
            FM = "face mask, ";
        }
        if (moisturizer == true) {
            M = "moisturizer, ";
        }
        if (serum == true) {
            S = "serum, ";
        }

        if (cleanser == true || essentialOil == true || faceMask == true || moisturizer == true || serum == true) {
            alert("You will recieve news about " + C + EO + FM + M + S + "from VOrskins!")
        }
        else {
            alert("You will recieve news from VOrskins!")
        }
    }
}