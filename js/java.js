function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var subject = document.contactForm.subject.value;
    var mobile = document.contactForm.mobile.value;
    var msg = document.contactForm.msg.value;
 
    
    var nameErr = emailErr = subjectErr = mobileErr = msgErr  = true;
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    


    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    

    if(subject == "") {
        printError("subjectErr", "Please enter your subject");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(subject) === false) {
            printError("subjectErr", "Please enter a valid subject");
        } else {
            printError("subjectErr", "");
            subjectErr = false;
        }
    }


    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    if(msg == "") {
        printError("msgErr", "Please enter your message");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(msg) === false) {
            printError("msgErr", "Please enter a valid message");
        } else {
            printError("msgErr", "");
            msgErr = false;
        }
    }
    
   
    if((nameErr || emailErr || subjecetErr || mobileErr || msgErr ) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
        "Full Name: " + name + "\n" +
        "Email Address: " + email + "\n" +
        "Subject: " + subject + "\n" +
        "Mobile Number: " + mobile + "\n" +
        "Message: " + emsg + "\n";
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};










// footer

(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
  })();