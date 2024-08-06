function validation() {
    const firstname = document.forms["form"]["FirstName"].value;
    if (firstname == "") {
        alert("You need to enter your first name");
        return false;
    }

    const lastname = document.forms["form"]["LastName"].value;
    if (lastname == "") {
        alert("You need to enter your last name");
        return false;
    }

    const phoneNumber = document.forms["form"]["PhoneNumber"].value;
    if (phoneNumber == "") {
        alert("You need to enter your phone number");
        return false;
    }

    const country = document.forms["form"]["Country"].value;
    if (country == "") {
        alert("You need to enter your country");
        return false;
    }

    const random = document.forms["form"]["Random"].value;
    if (random == "") {
        alert("You need to enter a random word");
        return false;
    }

    const checkbox = document.forms["form"]["checkbox"].checked;
    if (!checkbox) {
        alert("You need to click the checkbox");
        return false;
    }

    return true;
}
