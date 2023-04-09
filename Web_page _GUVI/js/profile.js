const prof_id = document.getElementById("profile_form");
const submit = document.getElementById("submit_blank");

var username = sessionStorage.getItem("username")

var xmlhttp1 = new XMLHttpRequest();
xmlhttp1.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(this.responseText);
        var email = result.email;
        var dob = result.dob;
        var gender = result.gender;
        var age = result.age;
        document.getElementById("email_blank").value=email;
        document.getElementById("username").value=username;
        document.getElementById("dob").value=dob;
        document.getElementById("age").value=age;
        document.getElementById("gender").value=gender;
    }
};
xmlhttp1.open("POST", "php/profile.php", true);
xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

var data = "username=" + username;
xmlhttp1.send(data);



submit.addEventListener("click",e =>{
    e.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email_blank").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate.getTime() - dobDate.getTime();
    const ageInYears = ageInMilliseconds / 31536000000;
    const i_age = Math.floor(ageInYears);

    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.open("POST","php/update.php",true);
    xmlhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    var data = "Username="+ username+"&EMail="+ email+"&DOB="+ dob+"&Gender="+ gender+"&Age="+i_age;
    xmlhttp2.send(data);

})
