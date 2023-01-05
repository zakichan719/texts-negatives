function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

var age=calculate_age(new Date(1999, 03, 16));






 
document.getElementById('age').innerHTML = age.toString();
var dt=new Date().getFullYear();
document.getElementById('copyrights').innerHTML = "© "+dt+" All rights reserved.";