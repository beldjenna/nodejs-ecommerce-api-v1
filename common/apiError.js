// @desc this class is responsible for operational errors
class ApiError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith(4) ? 'Failed' : 'Error';
        this.isOperational = true;
    }
}

module.exports = ApiError;