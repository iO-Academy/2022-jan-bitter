const createApiResponse = (status, message, data) => {
    return {
        status: status,
        message: message,
        data: data
    }
}
export default createApiResponse