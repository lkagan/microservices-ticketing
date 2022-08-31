import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
    public statusCode = 500;

    public constructor(public errors: ValidationError[]) {
        super();

        // Only because we are extending a built-in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    public serializeErrors(): {}[] {
        return this.errors.map(err => {
            return { message: err.msg, field: err.param }
        });
    }
}