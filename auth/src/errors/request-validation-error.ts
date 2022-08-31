import { ValidationError } from 'express-validator';
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
    public statusCode = 500;

    public constructor(public errors: ValidationError[]) {
        super('Invalid request parameters');

        // Only because we are extending a built-in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    public serializeErrors() {
        return this.errors.map(err => {
            return { message: err.msg, field: err.param }
        });
    }
}