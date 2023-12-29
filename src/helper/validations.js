export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\\\-_=+{};:,<.'>])[a-zA-Z\d!@#$%^&*()\\\-_=+{};:,<.'>]{8,}$/;
    return regex.test(password);
};