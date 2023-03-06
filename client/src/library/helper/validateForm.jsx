export const validate = (values) => {
    const errors = {};
    
    if (!values.username) {
        errors.username = "This field is required";
    } else {
        if (!/^[a-z0-9]*$/.test(values.username)) {
            errors.username = "Tên người dùng chỉ gồm chữ và số";
        }
    }
    if (!values.email) {
        errors.email = "This field is required";
    } else {
        // eslint-disable-next-line no-useless-escape
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
            errors.email = "Invalid email";
        }
    }
    if (!values.password) {
        errors.password = "This field is required";
    } else {
        if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }
    }
    return errors;
};

export const validatePass = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = "This field is required";
    } else {
        if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        } else {
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Password does not match";
            }
        }
    }

    return errors;
};

export const validateForm = (values) => {
    console.log(values.name);
    const errors = {};
    if (!values.name) {
        errors.name = "This field is required";
    }
    if (!values.phone) {
        errors.phone = "This field is required";
    }
    if (!values.city) {
        errors.city = "This field is required";
    }
    if (!values.address) {
        errors.address = "This field is required";
    }
};
