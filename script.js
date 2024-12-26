function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "soumyarangaiahgari417@gmail.com",
        Password : "Soumya-0417",
        To : 'soumyarangaiahgari043@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contect form enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}