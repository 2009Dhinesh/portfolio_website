function sendMail(){
    let gmail ={
        name : document.getElementById('name').value,
        mail : document.getElementById('mail').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value
    };
    console.log(gmail)
    emailjs.send("service_wwx3qaa","template_njxspfc",gmail).then(alert("Your message send Successfully..."))
}