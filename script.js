function getFormvalue(e) {
    if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
    }

    const firstName = document.querySelector('input[name="fname"]').value.trim().replace(/\s+/g, ' ');
    const lastName = document.querySelector('input[name="lname"]').value.trim().replace(/\s+/g, ' ');

    if (!firstName && !lastName) {
        alert("Please enter at least one name.");
        return;
    }

    const fullName = [firstName, lastName].filter(name => name).join(' ');
    alert(fullName);
}

document.getElementById('form1').addEventListener('submit', getFormvalue);