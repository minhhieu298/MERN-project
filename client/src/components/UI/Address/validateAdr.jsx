export const validateAdr = (values) => {
    let errors = {}
    if (!values.name) {
        errors.name = 'Trường bắt buộc'
    }
    if (!values.phone) {
        errors.phone = 'Trường bắt buộc'
    }
    if (!values.address) {
        errors.address = 'Trường bắt buộc'
    }
    if (!values.state || !values.district || !values.city) {
        errors.adrs = 'Trường bắt buộc'
    }
    return errors
}