//Replacement of the placeholders of the dynamic aspect of the CV
document.getElementById("name").innerHTML=localStorage.getItem("Fname") + " " + localStorage.getItem("Mname") + " " + localStorage.getItem("Lname");
document.getElementById("padd").innerHTML = localStorage.getItem("Add");
document.getElementById("phone").innerHTML = localStorage.getItem("Pnum");
document.getElementById("mail").innerHTML = localStorage.getItem("Email");