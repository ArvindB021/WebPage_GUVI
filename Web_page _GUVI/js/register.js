const reg_id=document.getElementById("register-form");
const submit = document.getElementById("submit_blank");

submit.addEventListener("click",(e) => {
    e.preventDefault()
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            console.log(this.response==="Username already exists");
            if (this.responseText === "Record added successfully") {
                alert("Registration successful!");
                window.location.href = "login.html";
            } else if (this.responseText === "Username already exists") {
                alert("Username already exists. Please choose a different username.");
                document.getElementById("username_blank").value = "";
                document.getElementById("password_blank").value = "";
                document.getElementById("re_password_blank").value = "";
                document.getElementById("dob_blank").value="";
            } else {
                alert("Error occurred while registering. Please try again later.");
            }
        }
    };

    xmlhttp.open("POST", "php/register.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    const username_1 = reg_id.username_blank.value;
    const password_1 = reg_id.password_blank.value;
    const re_pass = reg_id.re_password_blank.value;
    const dob = reg_id.dob_blank.value;
    if (password_1 == re_pass){
        var data = "username=" + username_1 + "&password=" + password_1+"&dob=" + dob;
        xmlhttp.send(data);
    }
    else{
        alert("Passwords do not match");
        document.getElementById("password_blank").value = "";
        document.getElementById("re_password_blank").value = "";
    }
})


