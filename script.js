function SendEmail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_3pqxeny" , "template_95st159", params).then(function (res){
        alert("Successs!" + res.status);
    })
}