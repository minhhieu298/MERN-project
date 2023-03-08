export const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = "Trường username là bắt buộc";
    } else {
        if (!/^[a-z0-9]*$/.test(values.username)) {
            errors.username = "Tên người dùng chỉ gồm chữ và số";
        }
    }
    if (!values.email) {
        errors.email = "Trường email là bắt buộc";
    } else {
        // eslint-disable-next-line no-useless-escape
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
            errors.email = "email không hợp lê";
        }
    }
    if (!values.password) {
        errors.password = "Trường mật khẩu là bắt buộc";
    } else {
        if (values.password.length < 8) {
            errors.password = "Mật khẩu tối thiểu 8 kí tự";
        }
    }
    return errors;
};

export const validatePass = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = "Trường bắt buộc";
    } else {
        if (values.password.length < 8) {
            errors.password = "Mật khẩu tối thiểu 8 kí tự";
        } else {
            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Mật khẩu không trùng khớp";
            }
        }
    }

    return errors;
};

export const validateForm = (values) => {
    // console.log(values.name);
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

export const resetValidate = (values) => {
    const errors = {}

    if (values.password.length < 8) {
        errors.password = "Mật khẩu tối thiểu 8 kí tự";
    }
    return errors
}