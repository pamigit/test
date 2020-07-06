// global var
let emailMode = true;
let btn = document.querySelector('button');

// set onload
document.querySelector("#email").classList.add("active");
document.querySelector("#email_section").style.display = "block";
document.querySelector("#mobile_section").style.display = "none";
document.querySelectorAll(".error").forEach(function(err) {
    err.style.display = "none";
});

// set active class to tab, visibility sections, and mode for validation
function active(tab) {
    document.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
    document.querySelectorAll(".section").forEach(function(section) {
        section.style.display = "none";
    });
    document.querySelector("#" + tab.id + "_section").style.display = "block";
    if (tab.id == "email") {
        emailMode = true;
    } else {
        emailMode = false;
    }
}

function addSpinner() {
    btn.classList.add('spin');
    btn.disabled = true;
    btn.form.firstElementChild.disabled = true;
}

function removeSpinner() {
    btn.classList.remove('spin');
    btn.disabled = false;
    btn.form.firstElementChild.disabled = false;
}

// validation of the registration form
function validateRegistration() {
    addSpinner();
    var email = document.forms["RegForm"]["email"];    
    var mobile = document.forms["RegForm"]["mobile"];  
    var currency =  document.forms["RegForm"]["currency"];
    var checks =  document.forms["RegForm"]["check_terms"];
     
    if(emailMode) {
        if (email.value == "" || email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) == null )    //.test(email.value))                             
        { 
            removeSpinner();
            document.querySelector("#error_email").style.display = "block";
            document.querySelector("#error_email").innerHTML = '<sup>*</sup>Please enter a valid email address!';
            email.focus(); 
            return false; 
        } else {
            document.querySelector("#error_email").style.display = "none";
        }
    } else {
        if (mobile.value == "" || mobile.value.match(/^((\+|00)?\d{1,3})?[1-9][0-9]{9}$/) == null)                           
        { 
            removeSpinner();
            document.querySelector("#error_mobile").style.display = "block";
            document.querySelector("#error_mobile").innerHTML = '<sup>*</sup>Please enter a valid mobile number!';
            mobile.focus(); 
            return false; 
        } else {
            document.querySelector("#error_mobile").style.display = "none";
        }
    }
   
    if (currency[0].checked == false && currency[1].checked == false && currency[2].checked == false) 
    {
        removeSpinner();
        document.querySelector("#error_currency").style.display = "block";
        document.querySelector("#error_currency").innerHTML = '<sup>*</sup>Please select currency!';
        return false;
    } else {
        document.querySelector("#error_currency").style.display = "none";
    }

    if (checks[0].checked == false || checks[1].checked == false || checks[2].checked == false) 
    {
        removeSpinner();
        document.querySelector("#error_check_conditions").style.display = "block";
        document.querySelector("#error_check_conditions").innerHTML = '<sup>*</sup>Please check all conditions!';
        return false;
    } else {
        document.querySelector("#error_check_conditions").style.display = "none";
    }
   
    document.querySelectorAll(".error").forEach(function(err) {
        err.style.display = "none";
    });
    setTimeout(function() {
        removeSpinner();
        alert("Successfully created registration!");
        document.forms["RegForm"].reset();
        return true; 
    }, 3000);
    
}

