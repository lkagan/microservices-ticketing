export class DatabaseConnectionError extends Error {
    public reason = 'Error connecting to database';
    public statusCode = 500;

    public constructor() {
        super();

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    public serializeErrors(): {}[] {
        return [ { message: this.reason } ];
    }
}