import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  /**
   * This method checks to see if there is a token in local storage.
   * @returns - True if there is a token that exists, False if there is not.
   */
  public isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null;
  }

  /**
   * @returns The token string that is in the local storage.
   */
  public getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  /**
   * This method uses a payload to retrieve the information on a token.
   *
   * Once the payload is generated it is then decoded and parsed to get
   * the user information, which is the ID and the admin status.
   * @returns User Object
   */
  public getCurrentUser(): any {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload.replace(/_/g, '/').replace(/-/g, '+'));
      const parsedPayload = JSON.parse(decodedPayload);
      return {
        userId: parsedPayload.userId,
        admin: parsedPayload.admin
      };
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }
}
