
function checkFields() {
    const form = document.querySelector('.form');
    const firstName = form.querySelector('#firstname');
    const lastName = form.querySelector('[placeholder="Last Name"]');
    const email = form.querySelector('#email');
    const contact = form.querySelector('[placeholder = "09X-XXXX-XXXX or XXXX-XXXX"]');
    const address = form.querySelector('.input-box.address input');
    const petName = form.querySelector('.input-box.petName input');
    const petAge = form.querySelector('.input-box.petAge input');
    const petAgeValue = petAge.value.trim();
    const petSpecies = form.querySelector('.input-box.petType input');
    const petBreed = form.querySelector('.input-box.petBreed input');
    const petColor = form.querySelector('.input-box.petColor input');
    const petMarking = form.querySelector('.input-box.petMarking input');
    const reasonForVisiting = form.querySelector('.input-box.rVisit textarea');
    const maleGender = form.querySelector('#male');
    const femaleGender = form.querySelector('#female');

    if (firstName.value.trim() === "") {
      alert("Please Provide Your First Name");
      return;
    }
    else if (lastName.value.trim() === "") {
      alert("Please Provide Your Last Name");
      return;
    }
    else if (email.value.trim() === "") {
      alert("Please Provide an Email Address");
      return;
    }
    else if (!email.value.trim().match(/^[A-Za-z\-_\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      alert("Please Provide a Valid Email Address")
    }
    else if (address.value.trim() === "") {
      alert("Please Provide Your Address");
      return;
    } 
    else if (contact.value.trim() === "") {
      alert("Please Provide Your Contact Number");
      return;
    }
    else if(!contact.value.trim().match(/^09\d{9}$/)){ 
      alert("Please Provide Valid Contact.");
    }
    else if (petName.value.trim() === "") {
      alert("Please Provide Your Pet's Name");
      return;
    }
    else if (petAgeValue === "") {
      alert("Please Provide Your Pet's Age");
      return;
    }
    else if (!/^\d+$/.test(petAgeValue) || parseInt(petAgeValue) < 1 || parseInt(petAgeValue) > 99) {
      alert("Please Enter A Valid Age (1-99)");
      return;
    }
    else if (petSpecies.value.trim() === "") {
      alert("Please Provide Your Pet Species");
      return;
    }
    else if (petBreed.value.trim() === "") {
      alert("Please Provide Your Pet Breed");
      return;
    }
    else if (petColor.value.trim() === "") {
      alert("Please Provide Your Pet Color");
      return;
    }
    else if (petMarking.value.trim() === "") {
      alert("Please Provide Your Pet Marking");
      return;
    }
    else if (reasonForVisiting.value.trim() === "") {
      alert("Please Provide Your Reason For Visiting");
      return;
    }
    else if (!maleGender.checked && !femaleGender.checked) {
      alert("Please Select Your Pet's Gender");
      return;
    }
    else{
      form.submit();
    }
  }

