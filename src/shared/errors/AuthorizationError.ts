/* eslint-disable import/prefer-default-export */
export class AuthorizationError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string) {
    this.message = message;
    this.statusCode = 401;
  }
}
