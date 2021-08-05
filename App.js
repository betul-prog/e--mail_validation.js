let buttonValidate = document.getElementById("validate");
​
​
const validateEmail = () => {
    let mail = document.getElementsByName("mail")[0];
    let output = document.querySelector("#output");
​
    const regexPattern =  /(\S+\@+\S+\.+\S{2,3})$/;
    if (regexPattern.test(mail.value)) {
        output.innerHTML = "Valid";
        output.style.color = "green";
        
        console.log("True");
    } else {
        output.innerHTML = "Invalid";
        output.style.color = "red";
​
        console.log("False");
    }
}
​
​
// /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,3})$/i
​