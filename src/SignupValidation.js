function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;



    if (!values.name) {
        error.name = "Email field should not be empty";
    }else {
        error.name = "";
    }

    if (!values.email) {
        error.email = "Email field should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is incorrect";
    } else {
        error.email = "";
    }
    if (!values.password) {
        error.password = "Email field should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Email format is incorrect";
    } else {
        error.password = "";
    }
    return error;
}
export default validation
    
