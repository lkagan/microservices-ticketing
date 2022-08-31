import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    public reason = 'Error connecting to database';
    public statusCode = 500;

    public constructor() {
        super('Error connecting to DB');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    public serializeErrors() {
        return [ { message: this.reason } ];
    }
}