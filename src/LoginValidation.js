// Updated validation function
function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{8,}$/;

    if (!values.username) {
        error.username = "Username field should not be empty";
    } else {
        error.username = "";
    }

    if (!values.password) {
        error.password = "Password field should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password format is incorrect";
    } else {
        error.password = "";
    }

    return error;
}
export default validation;
