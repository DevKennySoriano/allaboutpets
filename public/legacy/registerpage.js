function AccountValidate() {
	var email = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	var cpass = document.getElementById('cpass').value;
	var Fname = document.getElementById('Fname').value;
	var Lname = document.getElementById('Lname').value;
	var contact = document.getElementById('contact').value;
	
	
  
	if (email === '' || pass === '' || cpass === ''|| Fname === ''|| Lname === '') {
	  alert('Please fill in all required fields.');
	  return false;
	} else if (pass !== cpass) {
        alert("Passwords do not match!");
        return false;
	} else if (!email.includes('@') || !email.includes('.com')) {
		alert('Please enter a valid email address.');
		return false;
	}  else if (!contact.trim().match(/^09\d{9}$/)) { 
		alert("Please Provide Valid Contact.");
		return false;
	}
	
	
	var current_fs, next_fs, previous_fs;
	var animating;
	
	$(".next").click(function(){
		if(animating) return false;
		animating = true;
	
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
	
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		next_fs.show();
		current_fs.hide();
		animating = false;
	});
	
	$(".previous").click(function(){
		if(animating) return false;
		animating = true;
	
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
	
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
		previous_fs.show();
		current_fs.hide();
		animating = false;
	});
	
}