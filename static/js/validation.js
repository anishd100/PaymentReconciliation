//// validation.js
//
//// Function to validate Name
//function validateName() {
//    let name = document.getElementById("name").value;
//    const namePattern = /^[A-Za-z\s]{3,30}$/;
//
//    if (!namePattern.test(name)) {
//        alert("Invalid Name: Only letters and spaces (3-30 characters)");
//        return false;
//    }
//    alert("Name is valid!");
//    return true;
//}
//
//// Function to validate Email
//function validateEmail() {
//    let email = document.getElementById("email").value;
//    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//
//    if (!emailPattern.test(email)) {
//        alert("Invalid Email: Enter a valid email format");
//        return false;
//    }
//    alert("Email is valid!");
//    return true;
//}
//
//// Function to validate Contact Number
//function validateContact() {
//    let contact = document.getElementById("contact").value;
//    const contactPattern = /^[6-9]\d{9}$/;
//
//    if (!contactPattern.test(contact)) {
//        alert("Invalid Contact Number: Must be a 10-digit Indian number");
//        return false;
//    }
//    alert("Contact number is valid!");
//    return true;
//}
//
//// Function to validate PAN Number
//function validatePAN() {
//    let pan = document.getElementById("pan").value;
//    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
//
//    if (!panPattern.test(pan)) {
//        alert("Invalid PAN Number: Format should be ABCDE1234F");
//        return false;
//    }
//    alert("PAN number is valid!");
//    return true;
//}
//
//// Function to validate GST Number
//function validateGST() {
//    let gst = document.getElementById("gst").value;
//    const gstPattern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
//
//    if (!gstPattern.test(gst)) {
//        alert("Invalid GST Number: Format should be 11AAAAA1111A1Z1");
//        return false;
//    }
//    alert("GST number is valid!");
//    return true;
//}

// validation.js

// Function to validate Name
function validateName() {
    let name = document.getElementById("name").value;
    const namePattern = /^[A-Za-z\s]{3,30}$/;

    if (name.length > 0 && !namePattern.test(name)) {
//        alert("Invalid Name: Only letters and spaces (3-30 characters)");
        document.getElementById("error-message-name").innerHTML="Invalid Name:Only letters and spaces (3-30 characters)";
        return false;
    }
    document.getElementById("error-message-name").innerHTML="";
    return true;
}

// Function to validate Email
function validateEmail() {
    if (!validateName()) return false;
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length > 0 && !emailPattern.test(email)) {
//        alert("Invalid Email: Enter a valid email format");
        document.getElementById("invalid-email").innerHTML="Invalid Email:Enter a valid format";
        return false;
    }
    document.getElementById("invalid-email").innerHTML="";
    return true;
}

// Function to validate Contact Number
function validateContact() {
    if (!validateEmail()) return false;
    let contact = document.getElementById("contact").value;
    const contactPattern = /^[6-9]\d{9}$/;

    if (contact.length > 0 && !contactPattern.test(contact)) {

        document.getElementById("invalid-contact").innerHTML="Invalid Contact Number: Must be a 10-digit Indian number";
        return false;
    }
    document.getElementById("invalid-contact").innerHTML=""
    return true;
}

// Function to validate PAN Number
function validatePAN() {
    if (!validateContact()) return false;
    let pan = document.getElementById("pan").value;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (pan.length > 0 && !panPattern.test(pan)) {

        document.getElementById("invalid-pan").innerHTML= "Invalid PAN Number: Format should be ABCDE1234F";
        return false;
    }
    document.getElementById("invalid-pan").innerHTML="";
    return true;
}

// Function to validate GST Number
function validateGST() {
    if (!validatePAN()) return false;
    let gst = document.getElementById("gst").value;
    const gstPattern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

    if (gst.length > 0 && !gstPattern.test(gst)) {

        document.getElementById("gst").innerHTML="Invalid GST Number: Format should be 11AAAAA1111A1Z1";
        return false;
    }
    document.getElementById("invalid-gst").innerHTML="";
    return true;
}
