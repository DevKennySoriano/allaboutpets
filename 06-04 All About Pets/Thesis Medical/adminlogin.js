document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.login-form').addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      
      var username = document.querySelector('input[type="text"]').value;
      var password = document.querySelector('input[type="password"]').value;
      
      
      if (username === 'admin' && password === 'admin') {
        
        window.location.href = 'admindashboard.html';

      } else {
        
        alert ('Invalid username or password');
      }
    });
  });