function getFormvalue(e) {
		    e.preventDefault(); 
            const firstName = document.querySelector('input[name="fname"]').value.trim();
            const lastName = document.querySelector('input[name="lname"]').value.trim();

            const fullName = `${firstName} ${lastName}`.trim(); 
            alert(fullName);

}

