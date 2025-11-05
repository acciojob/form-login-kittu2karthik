function getFormvalue(e) {
    e.preventDefault();

    const firstName = document.querySelector('input[name="fname"]').value.trim().replace(/\s+/g, ' ');
    const lastName = document.querySelector('input[name="lname"]').value.trim().replace(/\s+/g, ' ');

    if (!firstName && !lastName) {
        return;
    }

    const fullName = [firstName, lastName].filter(name => name).join(' ');
    alert(fullName);
}