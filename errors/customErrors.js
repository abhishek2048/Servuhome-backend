const StatusCodes = require("http-status-codes");

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  UnauthenticatedError,
};
