//Variables for each of the sections of the form
const form = document.getElementById("formid");
const fname = document.getElementById("Fname");
const mname = document.getElementById("Mname");
const lname = document.getElementById("Lname");
const gender = document.getElementById("Gen");
const pnum = document.getElementById("Pnum");
const email = document.getElementById("Email");
const add = document.getElementById("Add");

//Function for storage and validation
function valid(x){
    x.preventDefault();
    localStorage.setItem("Fname", fname.value);
    localStorage.setItem("Mname",mname.value);
    localStorage.setItem("Lname", lname.value);
    localStorage.setItem("Gen",gender.value);
    localStorage.setItem("Pnum",pnum.value);
    localStorage.setItem("Email",email.value);
    localStorage.setItem("Add",add.value);

    //Regex for the fields to be checked
    var namecheck = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
    var numcheck =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    var mailcheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    
    //Conditions to be checked for validation
    if(!namecheck.test(fname.value)){
        alert("First name is invalid");
        return false;   
    }

    if(!namecheck.test(lname.value)){
        alert("Last name is invalid");
        return false;
    }

    if(!numcheck.test(pnum.value)){
        alert("Phone number is invalid");
        return false;
    }

    if(!mailcheck.test(email.value)){
        alert("Email is invalid");
        return false;
    }
    //Move to the next site if all validations are complete
    else{
        location.href= "cv.html";
    }    
    
}

//Event listener for submission of the form to be validated
form.addEventListener("submit",valid);

