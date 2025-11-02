function getFormvalue(e) {
		    e.preventDefault(); 
            const firstName = document.querySelector('input[name="fname"]').value.trim();
            const lastName = document.querySelector('input[name="lname"]').value.trim();

            if (!firstName && !lastName) {
                alert("Please enter at least one name.");
                return;
            }

            const fullName = `${firstName} ${lastName}`.trim(); 
            alert(fullName);

}

