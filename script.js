function getFormvalue(e) {
    //Write your code here
	e.preventDefault();
	const firstName = document.querySelector('input[name="fname"]').value;
	const lastName = document.querySelector('input[name="lname"]').value;
	alert(`${firstName.trim()} ${lastName.trim()}`)

}
