export const validate = (name, email, password) => {

    let isNameValid = null;

    if(name)
        isNameValid = /^[a-zA-Z]{2,30}$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(name)
        if(!isNameValid) return "Name is invalid";
    if(!isEmailValid) return "Email ID is invalid";
    if(!isPasswordValid) return "Password is invalid";

    return null;

}