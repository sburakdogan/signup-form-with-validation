import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import './styles.scss'
import { validateEmail, validatePassword } from "../../helper/validations";

const SignUpForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: null,
        email: null,
        password: null,
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Succesful!");
    }

    const handleInputOnBlur = (e) => {
        const { name, value, type } = e.target;
        const errorMessage = setInputError(value, type);
        setErrors({ ...errors, [name]: errorMessage });
    }

    const handleInputOnChange = (e) => {
        const { name, value, type } = e.target;
        setValues({ ...values, [name]: value });
        const errorMessage = setInputError(value, type);
        setErrors({ ...errors, [name]: errorMessage });
    }

    const setInputError = (value, type) => {
        if (value.length === 0) {
            return 'This field is required';
        } else if (type === 'email' && !validateEmail(value)) {
            return 'Invalid mail format';
        } else if (type === 'password' && !validatePassword(value)) {
            return 'At least one uppercase and lowercase letter, one special character, one number';
        }
        return null;
    }

    const isButtonDisabled = Object.values(errors).some(error => error !== null)
        || Object.values(values).some(value => value === '');

    return (
        <div className="formContainer">
            <form onSubmit={handleFormSubmit}>
                <Input
                    label='Name Surname:'
                    name='name'
                    value={values.name}
                    type='text'
                    placeholder='Enter your name...'
                    onChange={handleInputOnChange}
                    onBlur={handleInputOnBlur}
                    errorMessage={errors.name}
                />
                <Input
                    label='Email:'
                    name='email'
                    value={values.email}
                    type='email'
                    placeholder='Enter your email address...'
                    onChange={handleInputOnChange}
                    onBlur={handleInputOnBlur}
                    errorMessage={errors.email}
                />
                <Input
                    label='Password:'
                    name='password'
                    value={values.password}
                    type='password'
                    placeholder='Enter a password...'
                    onChange={handleInputOnChange}
                    onBlur={handleInputOnBlur}
                    errorMessage={errors.password}
                />
                <Button
                    disabled={isButtonDisabled}
                    value='Sign Up'
                />
            </form>
        </div>
    )
}

export default SignUpForm;