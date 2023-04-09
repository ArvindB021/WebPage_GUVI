const login_id = document.getElementById("login-form")
const login_submit = document.getElementById("submit_blank")

login_submit.addEventListener("click",(e)=>{
    e.preventDefault()
    const username_gn = login_id.username_blank.value;
    const password_gn = login_id.password_blank.value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            if (this.response === "0"){
                alert("Please register");
                window.location.href="register.html";
            }
            else{
                if(!(this.response===password_gn)){
                    alert("Incorrect Password");
                    document.getElementById("password_blank").value="";
                }
                else{
                    alert("You have successfully logged in!!");
                    sessionStorage.setItem("username", username_gn);
                    // console.log("Username stored in session storage: " + sessionStorage.getItem("username"));
                    window.location.href="profile.html";
                }
            }
        }
    };

    xmlhttp.open("POST", "php/get_data.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var data = "username=" + username_gn + "&password=" + password_gn;
    xmlhttp.send(data);
})

