const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}

const TryCatch = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (err) {
        next(err);
    }
}
export {errorMiddleware, TryCatch};