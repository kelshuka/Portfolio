

const myForm = document.querySelector('#myForm');

document.getElementById('sendMessage').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form from refreshing the page
    
    // Collect form data
    let templateParams = {
        from_name: document.getElementById('mName').value,
        from_email: document.getElementById('mEmail').value,
        subject: document.getElementById('mSubject').value,
        message: document.getElementById('mMessage').value,
    };

    // Send email using EmailJS
    emailjs.send('service_yr7ns18', 'template_5ltjv1a', templateParams)
    .then(function(response) {
        console.log('Message sent successfully!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again.');
    });
});
